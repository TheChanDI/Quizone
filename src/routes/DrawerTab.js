import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const DrawerTab = ({title, icon, btnPress}) => {
  return (
    <TouchableOpacity style={{flexDirection: 'row'}}>
      <Image source={icon} style={{height: wp(5), width: wp(5)}} />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default DrawerTab;
