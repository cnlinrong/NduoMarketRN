import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  BackAndroid,
  Alert,
  ScrollView,
  Image
} from 'react-native';
//引入tabbar支持包
import TabNavigator from 'react-native-tab-navigator';
import Account from './Account.js';
import DownloadManager from './DownloadManager.js';
import Search from './Search.js';
import Recommend from './Recommend.js';
import Game from './Game.js';
import Software from './Software.js';
import Find from './Find.js';
import Mgr from './Mgr.js';

const TabNavigatorItem =TabNavigator.Item;

const TAB_NORMAL_1=require('./img/main_ic_home_normal.png');
const TAB_NORMAL_2=require('./img/main_ic_game_normal.png');
const TAB_NORMAL_3=require('./img/main_ic_software_normal.png');
const TAB_NORMAL_4=require('./img/main_ic_entertainment_normal.png');
const TAB_NORMAL_5=require('./img/main_ic_me_normal.png');

const TAB_PRESS_1=require('./img/main_ic_home_pressed.png');
const TAB_PRESS_2=require('./img/main_ic_game_pressed.png');
const TAB_PRESS_3=require('./img/main_ic_software_pressed.png');
const TAB_PRESS_4=require('./img/main_ic_entertainment_pressed.png');
const TAB_PRESS_5=require('./img/main_ic_me_pressed.png');

export default class Home extends Component {

  constructor(){
    super();
    this.state={
      selectedTab:'Recommend',
    }
  }

  /**
  tab点击方法
  **/
  onPress(tabName){
    if(tabName){
      this.setState(
        {
          selectedTab:tabName,
        }
      );
    }
  }

   /**
   渲染每项
   **/
   renderTabView(title, tabName, isBadge) {
     var tabNomal;
     var tabPress;
     switch (tabName) {
       case 'Recommend':
         tabNomal=TAB_NORMAL_1;
         tabPress=TAB_PRESS_1;
         break;
       case 'Game':
         tabNomal=TAB_NORMAL_2;
         tabPress=TAB_PRESS_2;
         break;
       case 'Software':
         tabNomal=TAB_NORMAL_3;
         tabPress=TAB_PRESS_3;
         break;
       case 'Find':
         tabNomal=TAB_NORMAL_4;
         tabPress=TAB_PRESS_4;
         break;
       case 'Mgr':
         tabNomal=TAB_NORMAL_5;
         tabPress=TAB_PRESS_5;
         break;
     }
     return(
       <TabNavigatorItem
        title={title}
        renderIcon={()=><Image style={styles.tabIcon} source={tabNomal}/>}
        renderSelectedIcon={()=><Image style={styles.tabIcon} source={tabPress}/>}
        selected={this.state.selectedTab===tabName}
        selectedTitleStyle={{color:'#feb822'}}
        onPress={()=>this.onPress(tabName)}
        renderBadge={()=>isBadge?<View style={styles.badgeView}><Text style={styles.badgeText}>15</Text></View>:null}
       >
       {
         this.switchTab(tabName)
       }
       </TabNavigatorItem>
     );
   }

   switchTab = (tabName) => {
     if (tabName=='Recommend') {
       return (<Recommend gotoSearch={this.props.gotoSearch} gotoAccount={this.props.gotoAccount} gotoDownload={this.props.gotoDownload} />);
     } else if (tabName=='Game') {
       return (<Game gotoSearch={this.props.gotoSearch} gotoAccount={this.props.gotoAccount} gotoDownload={this.props.gotoDownload} />);
     } else if (tabName=='Software') {
       return (<Software gotoSearch={this.props.gotoSearch} gotoAccount={this.props.gotoAccount} gotoDownload={this.props.gotoDownload} />);
     } else if (tabName=='Find') {
       return (<Find gotoSearch={this.props.gotoSearch} gotoAccount={this.props.gotoAccount} gotoDownload={this.props.gotoDownload} />);
     } else if (tabName=='Mgr') {
       return (<Mgr gotoSearch={this.props.gotoSearch} gotoAccount={this.props.gotoAccount} gotoDownload={this.props.gotoDownload} />);
     }
   }

   /**
   自定义tabbar
   **/
  tabBarView(){
    return (
      <View style={{flex:1}}>
      <TabNavigator tabBarStyle={styles.tab}>
      {this.renderTabView('推荐','Recommend',false)}
      {this.renderTabView('游戏','Game',false)}
      {this.renderTabView('软件','Software',false)}
      {this.renderTabView('发现','Find',false)}
      {this.renderTabView('管理','Mgr',false)}
      </TabNavigator>
      </View>
    );
  }


  render() {
    var tabBarView=this.tabBarView();
    return (
      <View style={styles.container}>
        {tabBarView}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  tab:{
    height: 52,
    alignItems:'center',
    backgroundColor:'#f4f5f6',
  },
  tabIcon:{
    width:25,
    height:25,
  },
  badgeView:{
    width:22,
    height:14 ,
    backgroundColor:'#f85959',
    borderWidth:1,
    marginLeft:10,
    marginTop:5,
    borderColor:'#FFF',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:8,
  },
  badgeText:{
    color:'#fff',
    fontSize:8,
  }
});
