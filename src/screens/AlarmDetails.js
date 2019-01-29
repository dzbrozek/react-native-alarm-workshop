import { ScrollView } from "react-native";
import React from "react";
import AlarmHeader from "../components/AlarmHeader";
import AlarmActions from '../components/AlarmActions';

class AlarmDetails extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('alarm', { name: 'Alarm' }).name,
    };
  };

  render() {
    const { navigation } = this.props;
    const title =  navigation.getParam('alarm', { phoneNumber: 'N/A' }).phoneNumber;
    return (
      <ScrollView>
        <AlarmHeader title={title} image={require('../../assets/alarm.png')}/>
        
        <AlarmActions/>
      </ScrollView>
    );
  }
}

export default AlarmDetails;
