import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import LogoView from '../../component/LogoView';
import {Button} from '../../component/Button';
import {allColors, allImages} from '../../styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TouchableOpacity} from 'react-native-gesture-handler';

const GradeCourseScreen = ({navigation}) => {
  const [check, setCheck] = useState(false);
  return (
    <View style={{flex: 1}}>
      <LogoView imgStyle={{alignSelf: 'center'}} />
      <View style={{marginHorizontal: wp(5)}}>
        <Button
          addShadow
          title="Select Grade"
          titleStyle={{color: 'black'}}
          containerStyle={{
            backgroundColor: allColors.greyColor,
            borderRadius: wp(2),
            paddingVertical: hp(1.5),
          }}
        />
        <Button
          addShadow
          title="Select Course"
          titleStyle={{color: 'black'}}
          containerStyle={{
            backgroundColor: allColors.greyColor,
            borderRadius: wp(2),
            paddingVertical: hp(1.5),
            marginTop: hp(5),
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: hp(2),
        }}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setCheck(!check)}
          style={{
            borderWidth: 1,
            height: wp(4),
            width: wp(4),
            borderColor: 'grey',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {check ? (
            <Image
              source={allImages.Right}
              style={{height: wp(2.7), width: wp(2.7), tintColor: 'black'}}
            />
          ) : null}
        </TouchableOpacity>
        <Text style={{marginLeft: wp(2)}}>
          I agree to the Terms and Conditions.
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: hp(10),
          marginHorizontal: wp(10),
        }}>
        <Button
          btnPress={() => navigation.navigate('DrawerNav')}
          title="Register"
          titleStyle={{color: 'white'}}
        />
      </View>
    </View>
  );
};

export default GradeCourseScreen;
