import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class SearchBar extends Component {

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.onAccount} activeOpacity={0.5}>
          <Image source={require('./img/common_head_account.png')} style={styles.account} />
        </TouchableOpacity>
        <View style={styles.searchInputContainer}>
          <TouchableOpacity onPress={this.props.onSearch} activeOpacity={0.5}>
            <View style={styles.searchInput}>
              <Image source={require('./img/home_search_icon.png')} style={styles.search_icon} />
              <Text style={styles.search_text}>海量资源任你搜</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={this.props.onDownload} activeOpacity={0.5}>
          <Image source={require('./img/common_head_download.png')} style={styles.download} />
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffd121',
  },
  searchInputContainer: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 5,
  },
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  account: {
    width: 30,
    marginLeft: 10,
    height: 30,
  },
  search_icon: {
    width: 30,
    height: 30,
  },
  download: {
    marginRight: 10,
    width: 30,
    height: 30,
  },
  search_text: {

  }
});
