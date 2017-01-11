import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import DownloadBtn from './DownloadBtn.js';

const DEFAULT_APP_ICON = require('./img/icon.png');
const BTN_DOWNLOAD_NORMAL = require('./img/common_download_status_normal.png');
const BTN_DOWNLOAD_PRESSED = require('./img/common_download_status_pressed.png');

export default class AppGridCell extends Component {

  render() {
    return (
      <TouchableHighlight underlayColor='#dddddd' onPress={this.props.gotoAppDetail}>
        <View style={styles.container}>
            <Image source={{uri: this.props.appData.icon}} style={styles.app_icon} />
            <Text style={styles.app_name} ellipsizeMode="tail" numberOfLines={1}>{this.props.appData.name}</Text>
            <Text style={styles.app_size}>{this.props.appData.sizeFormat}</Text>
            <DownloadBtn downloadApp={() => {
              alert('开始下载');
            }} />
        </View>
      </TouchableHighlight>
    );
  }

  downloadApp = () => {
    alert('开始下载');
  };

}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  app_name: {
    fontSize: 15,
    marginTop: 5,
    color: '#000922'
  },
  app_size: {
    fontSize: 12,
    marginTop: 5,
    marginBottom: 5,
    color: '#a0a4ab',
  },
  app_icon: {
    width: 60,
    height: 60,
  },
});
