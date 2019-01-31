import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Button = (props) => {
  return <Text>Trust me, I am your Button</Text>;
};

Button.defaultProps = {
  disabled: false
};

const styles = StyleSheet.create({});

export default Button;
