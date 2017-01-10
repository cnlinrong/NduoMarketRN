import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import SearchBar from './SearchBar.js';

export default class Game extends Component {

  render() {
    return (
      <View style={styles.container}>
        <SearchBar onSearch={this.props.gotoSearch} onAccount={this.props.gotoAccount} onDownload={this.props.gotoDownload} />
        <ScrollableTabView
          initialPage={0}
          scrollWithoutAnimation={true}
          renderTabBar={this.renderTabBar}>
           <View tabLabel='分类' style={styles.itemLayout}><Text>分类</Text></View>
           <View tabLabel='推荐' style={styles.itemLayout}><Text>推荐</Text></View>
           <View tabLabel='排行' style={styles.itemLayout}><Text>排行</Text></View>
         </ScrollableTabView>
      </View>
    );
  }

  renderTabBar = () => {
    return (<ScrollableTabBar
        style={{height: 30}}
        underlineColor='rgba(0, 0, 0, 0.7)'
        activeTextColor='rgba(0, 0, 0, 0.7)'
        inactiveTextColor='rgba(0, 0, 0, 0.7)'
        underlineHeight={2}
        textStyle={{ fontSize: 13 }}
        backgroundColor='#ffd121'
        tabStyle={{height: 30, alignItems: 'stretch', justifyContent: 'flex-start', paddingLeft: 10, paddingRight: 10}}
    />);
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
  },
  itemLayout:{flex:1,alignItems:'center',justifyContent:'center'}
});
