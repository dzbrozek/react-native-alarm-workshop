import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class AlarmHeader extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <View>
        <Image source={require('../../assets/alarm.png')}/>
        <Text>{title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({});
