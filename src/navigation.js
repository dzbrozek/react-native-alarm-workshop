import {createAppContainer, createStackNavigator} from "react-navigation";
import AlarmDetails from "./screens/AlarmDetails";
import AlarmList from "./screens/AlarmList";
import AddAlarm from "./screens/AddAlarm";


const AppNavigator = createStackNavigator({
  AlarmList,
  AlarmDetails,
  AddAlarm
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
    headerTintColor: 'white',
  },
});

export default createAppContainer(AppNavigator);
