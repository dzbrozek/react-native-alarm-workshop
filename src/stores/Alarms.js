import { action, observable, runInAction } from 'mobx';
import { AsyncStorage } from 'react-native';

const KEY = 'ALARMS';

export class AlarmStore {
  @observable alarms = [];

  constructor() {
    this.loadAlarms();
  }

  @action
  async loadAlarms() {
    try {
      const key = await AsyncStorage.getItem(KEY);
      if (!key) {
        return;
      }

      runInAction(() => {
        this.alarms = JSON.parse(key);
      });
    } catch (e) {
      console.error(e);
    }
  }

  @action
  async addAlarm(alarm) {
    const alarms = [...this.alarms, alarm];
    await AsyncStorage.setItem(KEY, JSON.stringify(alarms));
    runInAction(() => {
      this.alarms = alarms;
    });
  }

  @action
  async removeAlarm(phoneNumber) {
    const alarms = this.alarms.filter(alarm => alarm.phoneNumber !== phoneNumber);
    await AsyncStorage.setItem(KEY, JSON.stringify(alarms));
    runInAction(() => {
      this.alarms = alarms;
    });
  }
}

export default new AlarmStore();
