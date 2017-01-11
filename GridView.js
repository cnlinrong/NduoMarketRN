import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableWithoutFeedback
} from 'react-native';

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
});

export default class GridView extends Component {

  constructor(props) {
    super(props);

    let dividerHorizontal = this.props.dividerHorizontal ? this.props.dividerHorizontal : 0;
    let column = this.props.column ? this.props.column : 2;
    this.state = {
      column: column,
      viewWidth: 0,
      dividerHorizontal: dividerHorizontal
    };
  }

  _renderItem(data) {
    let viewWidth = this.state.viewWidth;
    let column = this.state.column;
    let dividerHorizontal = this.state.dividerHorizontal;
    let itemWidth = (viewWidth - (dividerHorizontal * column - dividerHorizontal)) / column;
    let renderItem = this.props.renderItem;
    return (
      <View style={{width: itemWidth}}>
        {renderItem && renderItem(data)}
      </View>
    );
  }

  render() {
    let refreshControl = this.props.refreshControl ? this.props.refreshControl : null;
    return (
      <View
        style={{flex: 1}}
        onLayout={(event) => {
          let width = event.nativeEvent.layout.width;
          if (!width || width === this.state.viewWidth) {
            return;
          } else {
            this.setState({
              viewWidth: width
            });
          }
        }}>
        <ListView
          style={{flex: 1}}
          contentContainerStyle={styles.contentContainerStyle}
          dataSource={this.props.dataSource}
          renderRow={this._renderItem.bind(this)}
          refreshControl={refreshControl}
        />
      </View>
    );
  }
}
