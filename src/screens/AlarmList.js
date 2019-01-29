import React from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import AlarmHeader from '../components/AlarmHeader';
import AlarmListItem from '../components/AlarmListItem';
import EmptyAlarmList from '../components/EmptyAlarmList';
import Button from '../components/Button';
import { observer, inject } from 'mobx-react';

@inject('alarms')
@observer
class AlarmList extends React.Component {
  static navigationOptions = {
    title: 'Alarms'
  };
  
  addAlarm = () => {
    this.props.navigation.navigate('AddAlarm');
  };
  
  render() {
    const { navigation, alarms } = this.props;
    return (
      <ScrollView>
        <AlarmHeader title="My Alarms" image={require('../../assets/alarms.png')}/>
        
        <View style={styles.itemList}>
          <FlatList
            data={alarms.alarms}
            keyExtractor={(item) => String(item.id)}
            ListEmptyComponent={<EmptyAlarmList/>}
            renderItem={({item}) => <AlarmListItem alarm={item} navigation={navigation}/>}
          />
          
          <Button title="ADD NEW ALARM" onPress={this.addAlarm} style={styles.button}/>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  itemList: {
    margin: 10,
  },
  button: {
    marginTop: 20,
  }
});

export default AlarmList;
