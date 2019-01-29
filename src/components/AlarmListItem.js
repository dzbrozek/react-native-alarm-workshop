import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { inject } from 'mobx-react';

@inject('alarms')
class AlarmListItem extends React.Component {
  onPress = () => {
    const { navigation, alarm } = this.props;
    
    navigation.navigate('AlarmDetails', {alarm})
  };
  
  onLongPress = async () => {
    const { alarms, alarm } = this.props;
    
    await alarms.removeAlarm(alarm.id);
  };
  
  render() {
    const { alarm: { name } } = this.props;
    
    return (
      <TouchableOpacity onPress={this.onPress} onLongPress={this.onLongPress}>
        <View style={styles.container}>
          <FontAwesome name="lock" size={28} style={styles.alarmIcon}/>
          <Text numberOfLines={1} style={styles.name}>{ name }</Text>
          <FontAwesome name="arrow-circle-right" size={25} style={styles.arrowIcon}/>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
  },
  alarmIcon: {
    marginRight: 10,
    color: 'green',
  },
  arrowIcon: {
    color: 'grey',
  },
  name: {
    color: 'grey',
    flexGrow: 1,
    fontSize: 14,
  }
});

export default AlarmListItem;
