import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class AlarmHeader extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Image source={require('../../assets/alarm.png')}/>
        </View>
        <Text>Home</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({});
