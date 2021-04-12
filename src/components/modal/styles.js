import { StyleSheet } from "react-native"
import Constants from '../../utils/Constants'
import Metrics from '../../utils/Metrics'

export default (styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '80%',
    },
    buttonText: {
        color: "white",
        margin: 5,
        fontSize: 15
    },

    modal: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: Constants.Colors.Light,
        height: 300,
        width: '80%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        marginTop: Metrics.screenHeight * 0.3,
        alignSelf: 'center'
    },
    inputText: {
        fontSize: 15,
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        width: 200,
        padding: 10
    },
    buttonStyle: {
        backgroundColor: Constants.Colors.Dark,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        width: 70,
        alignItems: 'center'

    }

}));