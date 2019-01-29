import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

class FormInput extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput {...this.props} style={styles.input}/>
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
  input: {
    fontSize: 16,
    width: '100%',
  }
});

export default FormInput;
