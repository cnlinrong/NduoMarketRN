'use strict';

import React from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    PropTypes
} from 'react-native';

import Swiper from './Swiper';
const screenWidth = Dimensions.get('window').width;
const BANNER_INDICATOR_BG = require('../img/banner_indicator_bg.png');

export default class Banner extends React.Component {

    static propTypes: {
        banners: PropTypes.array.isRequired,
        intent: PropTypes.func,
        onMomentumScrollEnd: PropTypes.func,
    };

    constructor(props) {
        super(props);
        this.images = props.banners.map((banner) => banner.image);
        this.titles = props.banners.map((banner) => banner.title);
    }

    render() {
        let imageViews = this.images.map((image, index) => {
            return (
                <TouchableOpacity
                    activeOpacity={1}
                    style={{flex: 1}}
                    key={'b_image_'+index}
                    onPress={
                        () => {
                            this.props.intent && this.props.intent(index, this.banners);
                            // this.props.banners[index].intent && this.props.banners[index].intent(index);
                        }
                    }
                >
                    <Image resizeMode='stretch' style={styles.image} source={typeof(image) == 'string' ? {uri: image} : image} />
                </TouchableOpacity>
            );
        });

        return (
            <Swiper
              {...this.props}
              autoplay={true}
              whRatio={1.9}
              dotStyle={{width: 6, height: 6, backgroundColor:'#ddd'}}
              activeDotStyle={{width: 6, height: 6, backgroundColor:'#ffd121'}}
              renderTitle={
                  (index, view) => {
                      if (!this.titles[index]) {
                          return null;
                      }
                      return (
                          <Image resizeMode='stretch' style={styles.titleView} source={BANNER_INDICATOR_BG} />
                      );
                  }
              }
              paginationStyle={{
                    bottom: 10
              }}
              loop={true}
            >
                {imageViews}
            </Swiper>
        );
    }



}

const styles = StyleSheet.create({
    titleView: {
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 0,
        height: 32,
        width: screenWidth,
    },
    titleBg: {
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 0,
        height: 32,
        width: screenWidth,
    },
    titleStyle: {
        color: 'black',
    },
    image: {
        flex: 1,
    },
});

module.exports = Banner;
