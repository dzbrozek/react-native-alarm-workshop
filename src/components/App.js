import React from 'react';
import AppNavigation from '../navigation';
import { Provider as MobxProvider } from 'mobx-react/native';
import stores from '../stores';

export default class App extends React.Component {
  render() {
    return (
      <MobxProvider {...stores}>
        <AppNavigation persistenceKey={__DEV__ ? 'NavigationStateDEV' : null}/>
      </MobxProvider>
    );
  }
}
