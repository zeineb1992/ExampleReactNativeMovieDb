import { View, Text, StatusBar, ScrollView, Image } from "react-native"
import React, { Component } from "react"
import Constants from "../../utils/Constants"
import { callRemoteMethod } from "../../utils/WebServiceHandler"
import Loader from "../../utils/Loader"
import styles from "./styles"

class SecondScreen extends Component {
    static navigationOptions = {
        headerTitle: Constants.Strings.SECONDARY_TITLE,
        headerRight: <View />
    };

    state = {
        movieDetails: {},
        isLoading: false
    };

    componentDidMount() {
        this.getMovieDetails();
    }


    getMovieDetails = () => {
        var endpoint = Constants.URL.BASE_URL + "movie/" + this.props.navigation.state.params.id + "?" + Constants.URL.API_KEY;
        callRemoteMethod(this, endpoint, {}, "getMovieDetailsCallback", "GET", true);
    };



    getMovieDetailsCallback = response => {
        this.setState({ movieDetails: response });
    };

    render() {
        return (
            <View style={{ backgroundColor: Constants.Colors.Dark, flex: 1 }}>
                <StatusBar backgroundColor={Constants.Colors.Light} barStyle="light-content" />
                {this.state.isLoading ? <Loader show={true} loading={this.state.isLoading} /> : null}
                <ScrollView contentContainerStyle={styles.movieCard} showsVerticalScrollIndicator={false}>
                    <View style={{ alignItems: "center", justifyContent: 'space-evenly' }}>
                        <Image
                            style={styles.image}
                            resizeMode='contain'
                            source={{
                                uri:
                                    this.state.movieDetails.poster_path != null
                                        ? Constants.URL.IMAGE_URL + this.state.movieDetails.poster_path
                                        : Constants.URL.PLACEHOLDER_IMAGE
                            }}
                        />
                        <Text style={styles.title}>{this.state.movieDetails.original_title}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.textFirst}>{Constants.Strings.STATUS}</Text>
                        <Text style={styles.text}>{this.state.movieDetails.status}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.textFirst}>{Constants.Strings.RATINGS}</Text>
                        <Text style={styles.text}>
                            {this.state.movieDetails.vote_average}
                            /10
            </Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.textFirst}>{Constants.Strings.POPULARITY}</Text>
                        <Text style={styles.text}>{this.state.movieDetails.popularity}%</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.textFirst}>{Constants.Strings.BUDGET}</Text>
                        <Text style={styles.text}>{this.state.movieDetails.budget}</Text>
                    </View>


                    <View style={styles.row}>
                        <Text style={styles.textFirst}>{Constants.Strings.LANGUAGE}</Text>
                        <Text style={styles.text}>{this.state.movieDetails.original_language}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.textFirst}>{Constants.Strings.OVERVIEW}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text}>{this.state.movieDetails.overview}</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default SecondScreen