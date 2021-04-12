import { View, Text, StatusBar, TouchableOpacity, ScrollView } from "react-native"
import React, { Component } from "react"
import Loader from "../../utils/Loader"
import { callRemoteMethod } from "../../utils/WebServiceHandler"
import Constants from "../../utils/Constants"
import styles from "./styles"
import ModalSearch from '../../components/modal'
import Icons from '../../utils/Icons'
import MovieCard from "../../components/card"

export const NoData = () => {
    return <View style={styles.noData}>
        <Icons.Search
            size={50}
            style={styles.icon}
            color="white"
        />
        <Text style={styles.textContainer}>
            No data, please type text to search.
      </Text>
    </View>
}

class FirstScreen extends Component {
    static navigationOptions = {
        headerTitle: Constants.Strings.MAIN_TITLE
    };
    state = {
        movieList: [],
        isLoading: false,
        searchText: "",
        modalVisible: false
    };
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    searchButtonPressed = () => {

        if (this.state.searchText.length) {
            var endpoint =
                Constants.URL.BASE_URL + Constants.URL.SEARCH_QUERY + this.state.searchText + "&" + Constants.URL.API_KEY;
            callRemoteMethod(this, endpoint, {}, "searchCallback", "GET", true);

        } else {
            setTimeout(() => {
                alert(Constants.Strings.MSG);
            }, 5);
        }
    };



    searchCallback = response => {
        if (response.results.length) {
            this.setState({ movieList: response.results })
        } else {
            this.setState({ movieList: [] })
        }
        this.setModalVisible(!this.state.modalVisible)
    };



    render() {
        return (
            <View style={{ flex: 1, backgroundColor: Constants.Colors.Blue }}>
                {this.state.isLoading ? <Loader show={true} loading={this.state.isLoading} /> : null}
                <StatusBar backgroundColor={Constants.Colors.Dark} barStyle='default' />
                {this.state.movieList.length ?
                    <ScrollView contentContainerStyle={styles.movieList}>
                        {this.state.movieList.map(function (item, i) {
                            return (
                                <MovieCard onPressMovie={() => this.props.navigation.navigate("SecondScreen", { id: item.id })}
                                    key={i}
                                    source={{
                                        uri:
                                            item.poster_path != null
                                                ? Constants.URL.IMAGE_URL + item.poster_path
                                                : Constants.URL.PLACEHOLDER_IMAGE
                                    }}
                                    title={item.original_title}
                                />

                            );
                        }, this)}

                    </ScrollView>
                    : <NoData />}
                <ModalSearch onChangeText={text => this.setState({ searchText: text })}
                    onPressSearch={this.searchButtonPressed}
                    visible={this.state.modalVisible}
                    onPressClose={() => this.setModalVisible(false)}
                >
                </ModalSearch>
                <TouchableOpacity
                    onPress={() => this.setModalVisible(true)}
                    style={styles.buttonIcon}
                >
                    <Icons.Search size={30} color={Constants.Colors.Dark} />
                </TouchableOpacity>

            </View>
        );
    }
}

export default FirstScreen