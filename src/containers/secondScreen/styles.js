import { StyleSheet } from "react-native"
import Constants from "../../utils/Constants"
export default (styles = StyleSheet.create({
    movieCard: {
        margin: 10,
        backgroundColor: Constants.Colors.BlueGray,
        elevation: 10,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    image: { width: 160, height: 220, margin: 10 },
    text: {
        fontSize: 14,
        flexWrap: 'wrap',
        color: 'white'
    },
    row: {
        flexDirection: 'row',
        margin: 10
    },
    title: {
        fontSize: 20,
        flexWrap: 'wrap',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textFirst: {
        fontSize: 14,
        flexWrap: 'wrap',
        color: 'white',
        fontWeight: 'bold'
    }
}))
