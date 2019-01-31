import React from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import AlarmHeader from '../components/AlarmHeader';
import AlarmListItem from '../components/AlarmListItem';
import EmptyAlarmList from '../components/EmptyAlarmList';
import Button from '../components/Button';

class AlarmList extends React.Component {
  static navigationOptions = {
    title: 'My Alarms'
  };
  

  render() {
    const alarms = [
      {id: 1, name: 'Home'},
      {id: 2, name: 'School'},
      {id: 3, name: 'Office'},
    ];
    return (
      <View>
        <AlarmHeader title="My Alarms" image={require('../../assets/alarms.png')}/>
        
        <Button title="CREATE NEW" onPress={this.addAlarm} style={styles.button}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 20,
  }
});

export default AlarmList;
