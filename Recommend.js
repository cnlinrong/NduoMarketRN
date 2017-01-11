import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView,
  RefreshControl
} from 'react-native';
import Banner from './react-native-banner/Banner.js';
import SearchBar from './SearchBar.js';
import GridView from './GridView.js';
import AppGridCell from './AppGridCell.js';

const BANNER_URL = 'http://market3.nduoa.com/?actionid=216&cardid=281794&mt=4&sv=5.2&osv=4.4.2&cpu=armeabi-v7a,armeabi&rslt=720*1280&gpu=&imei=359209027536683&imsi=460005907323770&nt=10&dm=H30-U10&lan=zh-CHT&chl=nduo&cuid=1CFFD9B38A73B154F7235CAD8FCCA5FC%7C386635720902953&tz=GMT%2B08%3A00&apilevel=19&pid=2&sid=abd0428c32b30013bd6d636327da4923&sign=fed2abbd7a70dd576ccb2f7ab8f97c62';
const APP_LIST_URL = 'http://market3.nduoa.com/?actionid=205&cardid=242368&mt=4&sv=5.2&osv=4.4.2&cpu=armeabi-v7a,armeabi&rslt=720*1280&gpu=&imei=359209027536683&imsi=460005907323770&nt=10&dm=H30-U10&lan=zh-CHT&chl=nduo&cuid=1CFFD9B38A73B154F7235CAD8FCCA5FC%7C386635720902953&tz=GMT%2B08%3A00&apilevel=19&pid=2&sid=abd0428c32b30013bd6d636327da4923&sign=f8365539988d69517fc4f16723fe1b72';
const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Recommend extends Component {

  constructor(props) {
    super(props);

    this.banners = [];

    this.state = {
      refreshing: true,
      dataSource: dataSource,
      defaultIndex: 0,
    };
    this.defaultIndex = 0;
  }

  componentWillMount() {
    this.getBannerData();
    this.getAppList();
  }

  getBannerData = () => {
    fetch(BANNER_URL)
      .then((response) => response.json())
      .then((responseJson) => {
        let array = new Array();
        let items = responseJson.ResponseObject.items;
        for (var index in items) {
          this.banners.push({image: items[index].logoUrl, title: items[index].desc});
        }
        this.forceUpdate();
        return responseJson.ResponseObject.items;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  getAppList = () => {
    fetch(APP_LIST_URL)
      .then((response) => response.json())
      .then((responseJson) => {
        let array = new Array();
        let items = responseJson.ResponseObject.items;
        for (var i = 0; i < 8; i++) {
          let item = items[i];
          array.push(item && item);
        }
        this.setState({
          refreshing: false,
          dataSource: dataSource.cloneWithRows(array)
        });
        return responseJson.ResponseObject.items;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <SearchBar onSearch={this.props.gotoSearch} onAccount={this.props.gotoAccount} onDownload={this.props.gotoDownload} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.getAppList}
            />
          }
        >
          {this.renderBanner()}
          <GridView column={4} dividerHorizontal={0} dataSource={this.state.dataSource} renderItem={this.renderItem} />
          <GridView column={4} dividerHorizontal={0} dataSource={this.state.dataSource} renderItem={this.renderItem} />
        </ScrollView>
      </View>
    );
  }

  renderBanner = () => {
    if (this.banners.length != 0) {
      return (
        <Banner
          banners={this.banners}
          defaultIndex={this.defaultIndex}
          onMomentumScrollEnd={this.onMomentumScrollEnd}
          intent={this.clickListener}
        />
      );
    }
  };

  onMomentumScrollEnd = (event, state) => {
    this.defaultIndex = state.index;
  };

  clickListener = (index) => {
    alert('点击了' + index);
  };

  renderItem = (rowData) => {
    return (<AppGridCell appData={rowData} gotoAppDetail={this.props.gotoAppDetail} />);
  };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  scrollview: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row'
  },
  dividerLine: {
    height: 1,
    backgroundColor: '#dddddd'
  }
});
