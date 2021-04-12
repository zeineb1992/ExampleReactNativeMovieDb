import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')




// Used via Metrics.baseMargin
const metrics = {

    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,

    icons: {
        tiny: 16,
        small: 24,
        medium: 32,
        large: 45,
        xl: 50
    },
    images: {
        small: 20,
        sm: 30,
        medium: 40,
        large: 60,
        xl: 80,
        logo: 200
    }
}

export default metrics
