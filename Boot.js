import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native';

const LOADING_LOGO = require('./img/loading_logo.png');
const LOADING_TITLE = require('./img/loading_title.png');
const LOADING_TIP = require('./img/loading_tip.png');

export default class Boot extends Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#ffffff" translucent={true} />
        <View style={styles.topContainer}>
          <Image source={LOADING_LOGO} style={styles.loading_logo} />
        </View>
        <View style={styles.middleContainer}>
          <Text style={styles.loading_title}>N多市场</Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.loading_tip}>Copyright © nduo.cn</Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loading_logo: {
    height: 79,
    width: 79
  },
  loading_title: {
    fontSize: 20,
    color: '#000',
  },
  loading_tip: {
    fontSize: 15,
    color: '#000'
  },
  topContainer: {
    marginTop: 100,
    alignItems: 'center'
  },
  middleContainer: {
    marginTop: 50,
    alignItems: 'center',
    flex: 1
  },
  bottomContainer: {
    alignItems: 'center',
    marginBottom: 50,
  }
});
