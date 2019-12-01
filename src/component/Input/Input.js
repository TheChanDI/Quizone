import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {allColors} from '../../styles';

const Input = ({
  placeholder,
  textVal,
  textChange,
  inputStyle,
  imgsrc,
  imgStyle,
  containerStyle,
  img,
}) => {
  return (
    <View
      style={[
        {
          width: '100%',
          borderBottomWidth: 0.5,
          height: hp('4.5'),
          borderColor: allColors.theme,
        },
        containerStyle,
      ]}>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <TextInput
          textAlign="center"
          textAlignVertical="bottom"
          placeholder={placeholder}
          value={textVal}
          style={[
            {
              padding: 0,
              margin: 0,
              fontSize: wp('4'),
              // flex: 1,
            },
            inputStyle,
          ]}
          onChangeText={textChange}
        />
      </View>
      <View style={{position: 'absolute', bottom: 2}}>
        <View style={{width: wp(11), backgroundColor: '#fff'}}>
          <Image
            style={[{width: wp('8'), height: wp('8')}, imgStyle]}
            source={img}
          />
        </View>
      </View>
    </View>
  );
};

export default Input;
