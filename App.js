import {
  createStackNavigator,
} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import FirstScreen from './src/containers/firstScreen'
import SecondScreen from './src/containers/secondScreen'

const RootStack = createStackNavigator({
  FirstScreen: {
    screen: FirstScreen
  },
  SecondScreen: {
    screen: SecondScreen
  },

},
  {
    navigationOptions: {
      headerBackTitle: null,
      headerStyle: { backgroundColor: "#111111" },
      headerTitleStyle: {
        color: "#111111",
        flex: 1,
        textAlign: "center",
        fontSize: 16
      },
      headerTintColor: "#111111"
    }
  });

const App = createAppContainer(RootStack);

export default App;

