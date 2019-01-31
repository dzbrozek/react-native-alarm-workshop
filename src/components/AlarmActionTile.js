import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { SMS } from 'expo';

class AlarmActionTile extends React.Component {
  render() {
    const { icon, title } = this.props;
    return (
      <View style={styles.container}>
        <View
          style={styles.tile}
        >
          <View style={styles.content}>
            <View style={[styles.iconContainer]}>
              <FontAwesome name={icon} size={30} style={styles.icon}/>
            </View>
            <Text numberOfLines={1} style={[styles.title]}>{title}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
    padding: 5,
  },
  tile: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 6,
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: 'green',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: 'white',
  },
  title: {
    color: 'green',
    textAlign: 'center',
  }
});

export default AlarmActionTile;
