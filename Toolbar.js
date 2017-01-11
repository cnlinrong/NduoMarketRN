import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform
} from 'react-native';

const BACK_NORMAL = require('./img/common_button_back_normal.png');
const BACK_PRESSED = require('./img/common_button_back_pressed.png');

export default class Toolbar extends Component {

  render() {
    let iOS_style = Platform.OS == 'ios' ? {paddingTop: 20} : {};
    return (
      <View style={[styles.container, iOS_style]}>
        <TouchableOpacity onPress={this.props.onBack} activeOpacity={0.5}>
          <View style={styles.backContainer}>
            <Image source={BACK_NORMAL} style={styles.img_back} />
            <Text style={styles.title}>{this.props.title}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.dividerLine} />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    height: 60,
  },
  backContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15
  },
  title: {
    fontSize: 17,
  },
  img_back: {
    marginRight: 7,
    width: 20,
    height: 20,
  },
  dividerLine: {
    height: 1,
    backgroundColor: '#dddddd'
  }
});
