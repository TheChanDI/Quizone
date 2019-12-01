import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {globalStyle} from '../Style/GlobalStyle';
import {allColors} from '../../styles';

const Button = ({
  containerStyle,
  title,
  titleStyle,
  btnPress,
  backgroundColor,
  addShadow,
}) => {
  const [loading, setLoading] = useState(false);
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        setLoading(true);
        btnPress();
        setLoading(false);
      }}
      style={[
        {
          paddingVertical: hp('1'),
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: wp('4'),
          width: '100%',
          backgroundColor: backgroundColor ? backgroundColor : allColors.theme,
        },
        containerStyle,
        addShadow ? globalStyle.shadowStyle : null,
      ]}>
      {loading ? (
        <ActivityIndicator animating={loading} size="small" color="white" />
      ) : (
        <Text style={[{fontSize: hp('3'), color: '#E5E6E7'}, titleStyle]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
