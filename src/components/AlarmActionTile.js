import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default class AlarmActionTile extends React.Component {
  render() {
    const { icon, title } = this.props;
    return (
      <View>
        <FontAwesome name={icon} size={30}/>
        <Text>{title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({});
