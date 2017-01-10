import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  BackAndroid,
  Alert,
  Navigator,
  ToastAndroid,
  Platform
} from 'react-native';
import TabBarItem from './TabBarItem.js';
import SearchBar from './SearchBar.js';
import Account from './Account.js';
import DownloadManager from './DownloadManager.js';
import Search from './Search.js';
import Home from './Home.js';

const PAGE_CODE_HOME = 1000;// 首页
const PAGE_CODE_USER_MANAGER = 1001;// 用户管理
const PAGE_CODE_DOWNLOAD_MANAGER = 1002;// 下载管理
const PAGE_CODE_SEARCH = 1003;// 搜索页

export default class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {pageCode: PAGE_CODE_HOME, exitFlag: false};
  }

  shouldComponentUpdate() {
    //完全静态的组件,无需更新
    return false;
  }

  componentDidMount() {
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', this.handleBack);
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      this.timer && clearTimeout(this.timer);

      BackAndroid.removeEventListener('hardwareBackPress', this.handleBack);
    }
  }

  handleBack = () => {
    if (this.state.pageCode == PAGE_CODE_HOME) {
      if (this.state.exitFlag) {
        BackAndroid.exitApp(0);
      } else {
        ToastAndroid.show('再按一次退出N多市场', ToastAndroid.SHORT);
        this.setState({exitFlag: true});
        this.timer = setTimeout(() => {
          this.setState({exitFlag: false});
        }, 1500);
      }
      return true;
    } else {
      if (this.state.navigator) {
        this.state.navigator.pop();
        return true;
      }
    }
  }

  doRender = () => {
    return (<Navigator
      initialRoute={{pageCode: PAGE_CODE_HOME}}
      renderScene={(route, navigator) => {
        if (route.pageCode == PAGE_CODE_HOME) {
          this.setState({pageCode: PAGE_CODE_HOME, navigator: navigator});
          return (<Home gotoSearch={() => {
            navigator.push({pageCode: PAGE_CODE_SEARCH});
          }} gotoAccount={() => {
            navigator.push({pageCode: PAGE_CODE_USER_MANAGER});
          }} gotoDownload={() => {
            navigator.push({pageCode: PAGE_CODE_DOWNLOAD_MANAGER});
          }} />);
        } else if (route.pageCode == PAGE_CODE_USER_MANAGER) {
          this.setState({pageCode: PAGE_CODE_USER_MANAGER, navigator: navigator});
          return (<Account gotoBack={() => {
            navigator.pop();
          }} />);
        } else if (route.pageCode == PAGE_CODE_DOWNLOAD_MANAGER) {
          this.setState({pageCode: PAGE_CODE_DOWNLOAD_MANAGER, navigator: navigator});
          return (<DownloadManager gotoBack={() => {
            navigator.pop();
          }} />);
        } else if (route.pageCode == PAGE_CODE_SEARCH) {
          this.setState({pageCode: PAGE_CODE_SEARCH, navigator: navigator});
          return (<Search gotoBack={() => {
            navigator.pop();
          }} />);
        }
      }}
      configureScene={(route, routeStack) => {
        if (route.pageCode == PAGE_CODE_USER_MANAGER) {
          return Navigator.SceneConfigs.FloatFromLeft;
        } else if (route.pageCode == PAGE_CODE_SEARCH) {
          return Navigator.SceneConfigs.FloatFromBottomAndroid;
        } else {
          return Navigator.SceneConfigs.FloatFromRight;
        }
      }}
    />);
  };

  render() {
    return this.doRender();
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  scrollview: {
    backgroundColor: '#FFFF00',
  },
  tabBar: {
    flexDirection: 'row'
  }
});
