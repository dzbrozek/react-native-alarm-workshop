import { ScrollView } from 'react-native';
import React from 'react';
import AlarmHeader from '../components/AlarmHeader';
import AlarmActions from '../components/AlarmActions';

class AlarmDetails extends React.Component {
  static navigationOptions = {
    title: 'Details'
  };

  render() {
    return (
      <ScrollView>
        <AlarmHeader title={alarm.name} image={require('../../assets/alarm.png')}/>
        
        <AlarmActions alarm={alarm}/>
      </ScrollView>
    );
  }
}

export default AlarmDetails;
