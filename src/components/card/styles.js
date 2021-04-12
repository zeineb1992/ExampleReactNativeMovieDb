import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Constants";
import metrics from "../../utils/Metrics";

export default (styles = StyleSheet.create({
    cardView: {
        padding: 20,
        flexDirection: "column",
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    card: {
        backgroundColor: Colors.BlueGray,
        width: metrics.screenWidth * 0.8,
        borderRadius: 6
    },
    image: {
        width: 200,
        height: 200,
        marginVertical: 10
    },
    textTitle: {
        flex: 1,
        flexWrap: 'wrap',
        fontSize: 20,
        color: 'white',
        marginVertical: 5
    }
}));