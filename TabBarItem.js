import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

export default class TabBarItem extends Component {

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.props.onClick} underlayColor='#dddddd'>
          <View style={styles.content}>
            <Image source={this.props.img} style={styles.img} />
            <Text style={styles.text}>
              {this.props.text}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  content: {
    alignItems: 'center'
  },
  img: {
    width: 30,
    height: 30,
    marginTop: 10
  },
  text: {
    marginTop: 5,
    marginBottom: 10
  }
});
