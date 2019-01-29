import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Button = ({ title, onPress, disabled, style }) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View style={[styles.container, disabled && {backgroundColor: 'grey'}, style]}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
};

Button.defaultProps = {
  disabled: false
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 6,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 6,
    backgroundColor: 'green',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 17,
  }
});

export default Button;
