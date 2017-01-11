import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

export default class Boot extends Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#ffffff" translucent={true} />
        <Text style={styles.loading}>N多应用市场</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  loading: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
