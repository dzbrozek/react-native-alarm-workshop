import { ScrollView } from 'react-native';
import React from 'react';
import AlarmHeader from '../components/AlarmHeader';
import AlarmActions from '../components/AlarmActions';

class AlarmDetails extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('alarm', { name: 'N/A' }).name,
    };
  };

  render() {
    const { navigation } = this.props;
    const alarm = navigation.getParam('alarm');
    return (
      <ScrollView>
        <AlarmHeader title={alarm.name} image={require('../../assets/alarm.png')}/>
        
        <AlarmActions alarm={alarm}/>
      </ScrollView>
    );
  }
}

export default AlarmDetails;
