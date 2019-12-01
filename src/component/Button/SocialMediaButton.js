import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {globalStyle} from '../Style/GlobalStyle';

const SocialMediaButton = ({
  containerStyle,
  imgStyle,
  titleStyle,
  title,
  separatorStyle,
  backgroundColor,
  btnPress,
  icon,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={btnPress}
      style={[
        {
          width: wp('35'),
          alignItems: 'center',
          paddingLeft: wp('3'),
          flexDirection: 'row',
          paddingVertical: hp('1'),
          borderRadius: wp('3.2'),
          backgroundColor: backgroundColor,
        },
        globalStyle.shadowStyle,
        containerStyle,
      ]}>
      <View>
        <Image
          style={[{width: wp('6'), height: wp('6')}, imgStyle]}
          source={icon}
        />
      </View>

      <View style={[{marginLeft: wp('3')}, separatorStyle]}>
        <Text style={[{fontSize: wp('4'), fontWeight: 'bold'}, titleStyle]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default SocialMediaButton;
