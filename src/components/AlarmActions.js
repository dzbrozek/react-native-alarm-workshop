import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import AlarmActionTile from './AlarmActionTile';
import { SMS } from 'expo';

export default class AlarmActions extends React.Component {
  state = {
    isAvailable: false
  };

  render() {
    const disabled = !this.state.isAvailable;

    return (
      <View style={styles.container}>
        <AlarmActionTile icon="lock" title="ARM" phoneNumber="697142088" code="1" password="4321" disabled={disabled}/>
        <AlarmActionTile icon="unlock" title="DISARM" phoneNumber="697142088" code="2" password="4321" disabled={disabled}/>
        <AlarmActionTile icon="home" title="STAY ARM" phoneNumber="697142088" code="3" password="4321" disabled={disabled}/>
        <AlarmActionTile icon="bell" title="PANIC" phoneNumber="697142088" code="4" password="4321" disabled={disabled}/>
      </View>
    )
  }

  async componentDidMount() {
    const isAvailable = await SMS.isAvailableAsync();
    this.setState({
      isAvailable
    })
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

