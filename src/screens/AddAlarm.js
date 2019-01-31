import React from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet, View } from 'react-native';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import AlarmHeader from '../components/AlarmHeader';
import { inject } from 'mobx-react';
import {ToastAndroid} from 'react-native';

@inject('alarms')
class AddAlarm extends React.Component {
  static navigationOptions = {
    title: 'Create alarm'
  };
  
  state = {
    name: '',
    phoneNumber: '',
    password: '',
  };
  
  submitForm = async () => {
    const { name, phoneNumber, password } = this.state;

    const details = `Name: ${name} Number: ${phoneNumber} Password: ${password}`;
    ToastAndroid.show(`A new alarm has been added. ${details}`, ToastAndroid.BOTTOM);
  };
  
  render() {
    const { phoneNumber, name, password } = this.state;
    
    return (
      <ScrollView>
        <KeyboardAvoidingView behavior="position">
          <AlarmHeader title="Create alarm" image={require('../../assets/add.png')}/>

          <View style={styles.formContainer}>
            <FormInput/>

            <FormInput/>

            <FormInput/>

            <Button/>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  formContainer: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
});

export default AddAlarm;
