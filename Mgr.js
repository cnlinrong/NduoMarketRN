import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import SearchBar from './SearchBar.js';

export default class Mgr extends Component {

  render() {
    return (
      <View style={styles.container}>
        <SearchBar onSearch={this.props.gotoSearch} onAccount={this.props.gotoAccount} onDownload={this.props.gotoDownload} />
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>管理</Text></View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
