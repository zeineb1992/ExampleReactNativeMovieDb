import { StyleSheet } from "react-native";
import Metrics from '../../utils/Metrics'
import Constants from "../../utils/Constants";


export default (styles = StyleSheet.create({
    buttonIcon: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        position: 'absolute',
        bottom: 20,
        right: 20,
        height: 70,
        backgroundColor: '#fff',
        borderRadius: 100,
    },
    movieList: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Metrics.screenWidth,
        backgroundColor: Constants.Colors.Dark
    },

    noData: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    textContainer: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    }
}));