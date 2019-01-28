import { ScrollView } from "react-native";
import React from "react";
import AlarmHeader from "../components/AlarmHeader";
import AlarmActions from '../components/AlarmActions';

class Alarm extends React.Component {
  static navigationOptions = {
    title: 'Alarm',
  };

  render() {
    return (
      <ScrollView>
        <AlarmHeader/>
        <AlarmActions/>
      </ScrollView>
    );
  }
}

export default Alarm;
