import { NativeModules, Platform, ScrollView } from 'react-native';
import React from 'react';
import AlarmHeader from '../components/AlarmHeader';
import AlarmActions from '../components/AlarmActions';
const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

class AlarmDetails extends React.Component {
  render() {
    return (
      <ScrollView style={{paddingTop: STATUSBAR_HEIGHT}}>
        <AlarmHeader/>
        
        <AlarmActions/>
      </ScrollView>
    );
  }
}

export default AlarmDetails;
