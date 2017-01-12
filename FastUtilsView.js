import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  TouchableHighlight
} from 'react-native';

export default class FastUtilsView extends Component {

  render() {
    let fastUtilsData = this.props.data.map((item, index) => {
      return (
        <TouchableHighlight key={'img-' + index} underlayColor='#eee' onPress={() => {this.gotoCategoryPage(item)}} style={{flex: 1}}>
          <View style={styles.item}>
            <Image source={{uri: item.logoUrl}} style={styles.img} />
            <Text style={styles.text}>{item.desc}</Text>
          </View>
        </TouchableHighlight>
      );
    });
    return (
      <View style={styles.container}>
        {fastUtilsData}
      </View>
    );
  }

  gotoCategoryPage = (item) => {
    alert('点击了' + item.desc);
  };

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1
  },
  text: {
    fontSize: 14,
    color: '#000'
  },
  img: {
    width: 40,
    height: 40,
    marginBottom: 8
  },
  item: {
    flex: 1,
    alignItems: 'center'
  }
});
