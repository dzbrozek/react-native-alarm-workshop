import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class AlarmHeader extends React.Component {
  render() {
    const { title, image } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image}/>
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
  title: {
    color: 'white',
    fontSize: 14,
    paddingVertical: 4,
  },
  imageContainer: {
    backgroundColor: 'white',
    borderRadius: 90,
    padding: 20,
  },
  image: {
    width: 60,
    height: 60
  }
});

