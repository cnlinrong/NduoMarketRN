import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import Toolbar from './Toolbar.js';

export default class DownloadManager extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Toolbar onBack={this.props.gotoBack} title="下载管理" />
        <View style={styles.content}>
          <Text>下载管理</Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});
