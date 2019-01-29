import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const EmptyAlarmList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your list is empty</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'grey',
    paddingVertical: 20,
  }
});

export default EmptyAlarmList;
