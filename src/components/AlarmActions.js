import React from 'react';
import { View, StyleSheet } from 'react-native';
import AlarmActionTile from './AlarmActionTile';


export default class AlarmActions extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AlarmActionTile
          icon="lock"
          title="ARM"
        />
        <AlarmActionTile
          icon="unlock"
          title="DISARM"
        />
        <AlarmActionTile
          icon="home"
          title="STAY ARM"
        />
        <AlarmActionTile
          icon="bell"
          title="PANIC"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({});

