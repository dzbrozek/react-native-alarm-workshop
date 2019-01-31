import React from 'react';
import { View, StyleSheet } from 'react-native';
import AlarmActionTile from './AlarmActionTile';
import { SMS } from 'expo';

export default class AlarmActions extends React.Component {
  render() {
    const { alarm: { phoneNumber, password} } = this.props;

    return (
      <View style={styles.container}>
        <AlarmActionTile
          icon="lock"
          title="ARM"
          phoneNumber={phoneNumber}
          code="1"
          password={password}
        />
        <AlarmActionTile
          icon="unlock"
          title="DISARM"
          phoneNumber={phoneNumber}
          code="2"
          password={password}
        />
        <AlarmActionTile
          icon="home"
          title="STAY ARM"
          phoneNumber={phoneNumber}
          code="3"
          password={password}
        />
        <AlarmActionTile
          icon="bell"
          title="PANIC"
          phoneNumber={phoneNumber}
          code="4"
          password={password}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

