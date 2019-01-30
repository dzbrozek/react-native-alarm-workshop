import { action, observable, runInAction } from 'mobx';
import { AsyncStorage } from 'react-native';

const KEY = 'ALARMS';

export class AlarmsStore {
  @observable alarms = [];

  @action
  async loadAlarms() {
    const alarms = [];

    runInAction(() => {
      this.alarms = alarms;
    });
  }

  @action
  async addAlarm(alarm) {
    const alarms = [];

    runInAction(() => {
      this.alarms = alarms;
    });
  }

  @action
  async removeAlarm(alarmId) {
    const alarms = [];

    runInAction(() => {
      this.alarms = alarms;
    });
  }
}

export default new AlarmsStore();
