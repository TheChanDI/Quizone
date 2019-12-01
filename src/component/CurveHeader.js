import React from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import {allColors} from '../styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CurveHeader = ({navigation, leftEvent, icon, title}) => {
  return (
    <View
      style={{
        backgroundColor: allColors.theme,
        height: hp(20),
        borderBottomEndRadius: wp(10),
        borderBottomLeftRadius: wp(10),
        paddingTop: hp(1),
        paddingLeft: wp(2),
      }}>
      <StatusBar backgroundColor={allColors.theme} />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity activeOpacity={0.7} onPress={leftEvent}>
          <Image source={icon} style={{height: wp(7), width: wp(7)}} />
        </TouchableOpacity>

        <Text style={{fontSize: wp(6), color: 'white', marginLeft: wp(5)}}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default CurveHeader;
