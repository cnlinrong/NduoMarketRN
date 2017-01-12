import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Platform
} from 'react-native';
import GridView from './GridView.js';
import AppGridCell from './AppGridCell.js';

export default class AppGridView extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topDecorator}>
          <View style={styles.topDecoratorImg} />
          <Text style={styles.topDecoratorText}>{this.props.title}</Text>
        </View>
        <View style={styles.dividerLine} />
        <GridView column={4} dividerHorizontal={0} dataSource={this.props.dataSource} renderItem={this.renderItem} />
        <View style={styles.dividerLine} />
        <View style={styles.moreContainer}>
          <TouchableHighlight underlayColor='#ddd' onPress={this.getMore} style={styles.moreButton}>
            <Text style={styles.moreText}>查看更多</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.marginBottom} />
      </View>
    );
  }

  renderItem = (rowData) => {
    if (rowData) {
      return (<AppGridCell appData={rowData} gotoAppDetail={this.props.gotoAppDetail} />);
    }
  };

  getMore = () => {
    alert('查看更多');
  };

}

const styles = StyleSheet.create({
  container: {

  },
  topDecorator: {
    flexDirection: 'row',
    flex: 1,
    padding: 15,
    alignItems: 'center'
  },
  topDecoratorImg: {
    backgroundColor: '#70db61',
    width: 5,
    height: 17,
    borderRadius: 5,
  },
  topDecoratorText: {
    fontSize: 17,
    color: '#000',
    marginLeft: 10
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
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#dddddd'
  },
  marginBottom: {
    height: 10,
    backgroundColor: '#ddd'
  },
  moreContainer: {
    padding: 15,
  },
  moreButton: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#feb822'
  },
  moreText: {
    color: '#fff'
  }
});
