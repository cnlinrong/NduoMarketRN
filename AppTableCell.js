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

const DEFAULT_APP_ICON = require('./img/icon.png');
const BTN_DOWNLOAD_NORMAL = require('./img/common_download_status_normal.png');
const BTN_DOWNLOAD_PRESSED = require('./img/common_download_status_pressed.png');

export default class AppTableCell extends Component {

  render() {
    return (
      <TouchableHighlight underlayColor='#dddddd' onPress={this.props.gotoAppDetail}>
        <View style={styles.container}>
            <View style={styles.left_container}>
              <Image source={{uri: this.props.appData.icon}} style={styles.app_icon} />
            </View>
            <View style={styles.middle_container}>
              <Text style={styles.app_name}>{this.props.appData.name}</Text>
              <Text style={styles.app_info}>{this.props.appData.downNumFormat + ' ' + this.props.appData.sizeFormat}</Text>
              <Text style={styles.app_desc} ellipsizeMode="tail" numberOfLines={1}>{this.props.appData.intro}</Text>
            </View>
            <View style={styles.download_container}>
              <TouchableOpacity activeOpacity={0.5} onPress={this.downloadApp}>
                <Image source={BTN_DOWNLOAD_NORMAL} style={styles.btn_download} />
              </TouchableOpacity>
              <Text>下载</Text>
            </View>
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
    flexDirection: 'row',
    padding: 15
  },
  left_container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10
  },
  middle_container: {
    justifyContent: 'center',
    flex: 1,
    paddingRight: 15
  },
  app_name: {
    fontSize: 17,
    color: '#000922'
  },
  app_info: {
    fontSize: 12,
    color: '#a0a4ab'
  },
  app_desc: {
    fontSize: 12,
    color: '#a0a4ab'
  },
  download_container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  app_icon: {
    width: 60,
    height: 60,
  },
  btn_download: {
    width: 32,
    height: 32,
    marginBottom: 5
  },
});
