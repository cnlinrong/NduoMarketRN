import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

const BTN_DOWNLOAD_NORMAL = require('./img/common_download_status_normal.png');

export default class DownloadBtn extends Component {

  render() {
    return (
      <TouchableOpacity onPress={this.props.downloadApp} activeOpacity={0.6}>
        <View style={styles.container}>
          <Image source={BTN_DOWNLOAD_NORMAL} style={styles.img} />
          <Text style={styles.text}>下载</Text>
        </View>
      </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ffd121',
    borderRadius: 10,
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 3,
    paddingBottom: 3,
  },
  content: {
    alignItems: 'center'
  },
  img: {
    width: 15,
    height: 15,
  },
  text: {
    color: '#ffd121',
    marginLeft: 3
  }
});
