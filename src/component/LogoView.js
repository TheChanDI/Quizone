import React, {useState, useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {allImages} from '../styles';

const LogoView = ({imgStyle}) => {
  return (
    <View style={{height: hp(30), width: wp(50), ...imgStyle}}>
      <Image
        resizeMode="contain"
        style={{width: null, height: null, flex: 1}}
        source={allImages.Logo}
      />
    </View>
  );
};
export default LogoView;
