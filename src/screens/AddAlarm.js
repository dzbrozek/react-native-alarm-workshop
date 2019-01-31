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
    const { alarms } = this.props;
    
    await alarms.addAlarm({
      ...this.state,
      id: new Date().getTime(),
    });

    ToastAndroid.show('A new alarm has been added', ToastAndroid.BOTTOM);
  };
  
  render() {
    const { phoneNumber, name, password } = this.state;
    
    return (
      <ScrollView>
        <KeyboardAvoidingView behavior="position">
          <AlarmHeader title="Create alarm" image={require('../../assets/add.png')}/>

          <View style={styles.formContainer}>
            <FormInput
              icon="home"
              placeholder="Name"
              value={name}
              onChangeText={(text) => this.setState({name: text})}
            />

            <FormInput
              icon="phone"
              placeholder="Phone number"
              value={phoneNumber}
              keyboardType="phone-pad"
              onChangeText={(text) => this.setState({phoneNumber: text})}
            />

            <FormInput
              icon="key"
              placeholder="Password"
              value={password}
              secureTextEntry={true}
              onChangeText={(text) => this.setState({password: text})}
            />

            <Button title="ADD" disabled={!(phoneNumber && name && password)} onPress={this.submitForm} style={styles.button}/>
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
  button: {
    marginTop: 20,
  }
});

export default AddAlarm;
