import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import SearchBar from './SearchBar.js';

export default class Recommend extends Component {

  render() {
    return (
      <View style={styles.container}>
        <SearchBar onSearch={this.props.gotoSearch} onAccount={this.props.gotoAccount} onDownload={this.props.gotoDownload} />
        <View style={styles.dividerLine} />
        <ScrollView style={styles.scrollview} showsVerticalScrollIndicator={false}>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
          <Text>测试测试测试</Text>
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  scrollview: {

  },
  tabBar: {
    flexDirection: 'row'
  },
  dividerLine: {
    height: 1,
    backgroundColor: '#dddddd'
  }
});
