import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Platform,
  ListView,
  RefreshControl
} from 'react-native';
import AppTableCell from './AppTableCell.js';

export default class AppListView extends Component {

  render() {
    return (
      <View style={styles.container}>
        <ListView
          refreshControl={
            <RefreshControl
              refreshing={this.props.refreshing}
              onRefresh={this.props.onRefresh}
            />
          }
          dataSource={this.props.dataSource}
          renderRow={this.renderTableCell}
          renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => <View key={sectionID + '-' + rowID} style={styles.separator} />}
          renderHeader={() => {
            return (
              <View style={styles.topContainer}>
                <View style={styles.topDecorator}>
                  <View style={styles.topDecoratorImg} />
                  <Text style={styles.topDecoratorText}>{this.props.title}</Text>
                </View>
                <View style={styles.dividerLine} />
              </View>
            );
          }}
          renderFooter={() => {
            return (
              <View style={styles.bottomContainer}>
                <View style={styles.moreContainer}>
                  <TouchableHighlight underlayColor='#ddd' onPress={this.getMore} style={styles.moreButton}>
                    <Text style={styles.moreText}>查看更多</Text>
                  </TouchableHighlight>
                </View>
                <View style={styles.marginBottom} />
              </View>
            );
          }}
        />
      </View>
    );
  }

  getMore = () => {
    alert('查看更多');
  };

  renderTableCell = (rowData) => {
    if (rowData) {
      return (<AppTableCell appData={rowData} gotoAppDetail={this.props.gotoAppDetail} />);
    }
  };

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topDecorator: {
    flexDirection: 'row',
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
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd',
    marginLeft: 15,
    marginRight: 15
  },
  bottomContainer: {

  },
  topContainer: {

  }
});
