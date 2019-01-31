import React from 'react';
import AppNavigation from '../navigation';
import { Provider as MobxProvider } from 'mobx-react/native';
import stores from '../stores';
import AddAlarm from '../screens/AddAlarm';

export default class App extends React.Component {
  render() {
    return (
      <MobxProvider {...stores}>
        <AddAlarm/>
      </MobxProvider>
    );
  }
}
