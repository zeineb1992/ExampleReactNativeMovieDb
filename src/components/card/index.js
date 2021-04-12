import React, { Component } from 'react'
import { Card } from 'native-base';
import { Image, Text, TouchableOpacity } from 'react-native'
import styles from "./styles"


class MovieCard extends Component {

    render() {
        const { title, source, onPressMovie, key } = this.props
        return (
            <Card style={styles.card}>
                <TouchableOpacity
                    onPress={onPressMovie}
                    key={key}
                    style={styles.cardView}>

                    <Text style={styles.textTitle}>
                        {title}
                    </Text>

                    <Image
                        style={styles.image}
                        source={source}
                        resizeMode='contain'
                    />

                </TouchableOpacity>
            </Card>
        );
    }
}


export default MovieCard