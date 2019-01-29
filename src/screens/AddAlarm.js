import React from 'react';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import AlarmHeader from '../components/AlarmHeader';
import { inject } from 'mobx-react';

@inject('alarms')
class AddAlarm extends React.Component {
  static navigationOptions = {
    title: 'Add alarm'
  };
  
  state = {
    phoneNumber: '',
    name: '',
    password: '',
  };
  
  submitForm = async () => {
    const { alarms, navigation } = this.props;
    
    await alarms.addAlarm({
      ...this.state,
      id: new Date().getTime(),
    });
    
    navigation.navigate('AlarmList');
  };
  
  render() {
    const { phoneNumber, name, password } = this.state;
    
    return (
      <KeyboardAvoidingView behavior="padding" enabled>
        <AlarmHeader title="Add alarm" image={require('../../assets/add.png')}/>
        
        <View style={styles.formContainer}>
          <FormInput
            placeholder="Name"
            value={name}
            onChangeText={(text) => this.setState({name: text})}
          />
          
          <FormInput
            placeholder="Phone number"
            value={phoneNumber}
            keyboardType="phone-pad"
            onChangeText={(text) => this.setState({phoneNumber: text})}
          />
          
          <FormInput
            placeholder="Password"
            value={password}
            secureTextEntry={true}
            onChangeText={(text) => this.setState({password: text})}
          />
          
          <Button title="Add" disabled={!(phoneNumber && name && password)} onPress={this.submitForm}/>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  formContainer: {
    padding: 10,
  }
});

export default AddAlarm;
