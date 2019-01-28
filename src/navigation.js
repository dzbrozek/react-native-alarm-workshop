import {createAppContainer, createStackNavigator} from "react-navigation";
import Alarm from "./screens/Alarm";


const AppNavigator = createStackNavigator({
  Alarm
}, {
  defaultNavigationOptions: {
    headerTitleStyle: {
      fontSize: 16,
      color: 'white',
      alignContent: 'center',
    },
    headerStyle: {
      backgroundColor: 'green',
    },
    headerTintColor: 'red',
  },
});

export default createAppContainer(AppNavigator);
