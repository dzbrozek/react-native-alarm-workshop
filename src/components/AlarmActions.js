import React from 'react';
import { View, StyleSheet } from 'react-native';
import AlarmActionTile from './AlarmActionTile';
import { SMS } from 'expo';

export default class AlarmActions extends React.Component {
  state = {
    isAvailable: false
  };

  render() {
    const { alarm: { phoneNumber, password} } = this.props;
    const disabled = !this.state.isAvailable;

    return (
      <View style={styles.container}>
        <AlarmActionTile
          icon="lock"
          title="ARM"
          phoneNumber={phoneNumber}
          code="1"
          password={password}
          disabled={disabled}
        />
        <AlarmActionTile
          icon="unlock"
          title="DISARM"
          phoneNumber={phoneNumber}
          code="2"
          password={password}
          disabled={disabled}
        />
        <AlarmActionTile
          icon="home"
          title="STAY ARM"
          phoneNumber={phoneNumber}
          code="3"
          password={password}
          disabled={disabled}
        />
        <AlarmActionTile
          icon="bell"
          title="PANIC"
          phoneNumber={phoneNumber}
          code="4"
          password={password}
          disabled={disabled}
        />
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
    margin: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

