import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

class FormInput extends React.Component {
  render() {
    const { icon, ...inputProps } = this.props;

    return (
      <View style={styles.container}>
        <FontAwesome name={icon} size={22} style={styles.icon}/>
        <TextInput {...inputProps} style={styles.input}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
  },
  icon: {
    marginRight: 10,
    color: 'green',
  },
  input: {
    fontSize: 18,
    paddingVertical: 3,
    width: '100%',
  }
});

export default FormInput;
