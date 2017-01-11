import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  RefreshControl
} from 'react-native';
import SearchBar from './SearchBar.js';
import AppTableCell from './AppTableCell.js';

const APP_LIST_URL = 'http://market3.nduoa.com/?actionid=205&cardid=281776&mt=4&sv=5.2&osv=4.4.2&cpu=armeabi-v7a,armeabi&rslt=720*1280&gpu=&imei=359209027536683&imsi=460005907323770&nt=10&dm=H30-U10&lan=zh-CHT&chl=nduo&cuid=1CFFD9B38A73B154F7235CAD8FCCA5FC%7C386635720902953&tz=GMT%2B08%3A00&apilevel=19&pid=2&sid=abd0428c32b30013bd6d636327da4923&sign=a86115600cade1ec3446562f0ab9ccd5';
const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Find extends Component {

  constructor(props) {
    super(props);

    this.state = {
      refreshing: true,
      dataSource: dataSource
    };
  }

  componentWillMount() {
    this.getAppList();
  }

  getAppList = () => {
    fetch(APP_LIST_URL)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          refreshing: false,
          dataSource: dataSource.cloneWithRows(responseJson.ResponseObject.items)
        });
        return responseJson.ResponseObject.items;
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          refreshing: false
        });
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <SearchBar onSearch={this.props.gotoSearch} onAccount={this.props.gotoAccount} onDownload={this.props.gotoDownload} />
        <ListView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.getAppList}
            />
          }
          dataSource={this.state.dataSource}
          renderRow={this.renderTableCell}
          renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => <View key={sectionID + '-' + rowID} style={styles.separator} />}
        />
      </View>
    );
  }

  renderTableCell = (rowData) => {
    return (<AppTableCell appData={rowData} gotoAppDetail={this.props.gotoAppDetail} />);
  };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd',
    marginLeft: 15,
    marginRight: 15
  }
});
