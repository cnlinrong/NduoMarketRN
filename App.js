import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import Boot from './Boot.js';
import Main from './Main.js';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {loading: true};
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({loading: false});
    }, 2000);
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  render() {
    return this.doRender();
  }

  doRender = () => {
    if (this.state.loading) {
      return (<Boot />);
    } else {
      return (<Main />);
    }
  };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});
