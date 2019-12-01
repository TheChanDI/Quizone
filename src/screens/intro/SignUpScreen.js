import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {allColors, allImages} from '../../styles';
import LogoView from '../../component/LogoView';
import Input from '../../component/Input/Input';
import {Button} from '../../component/Button';

const SignUpScreen = ({navigation}) => {
  const [userName, changeUserName] = useState('');
  const [emailId, changeEmail] = useState('');
  const [mobNum, changeMobNum] = useState('');
  const [password, changePassword] = useState('');
  const [conformPassword, changeConformPassword] = useState('');

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingTop: hp(5),
            height: hp('25'),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <LogoView imgStyle={{width: wp(80)}} />
        </View>
        <View
          style={{
            paddingLeft: wp('10'),
            paddingRight: wp('5'),
            marginTop: hp('5'),
          }}>
          <Input
            img={allImages.user}
            textVal={userName}
            placeholder="Username*"
            textChange={text => changeUserName(text)}
          />

          <Input
            img={allImages.email}
            containerStyle={styles.textInputSpacingStyle}
            textVal={emailId}
            placeholder="Email ID*"
            textChange={text => changeEmail(text)}
          />

          <Input
            img={allImages.mobile}
            containerStyle={styles.textInputSpacingStyle}
            textVal={mobNum}
            placeholder="Mobile Number"
            textChange={text => changeMobNum(text)}
          />

          <Input
            img={allImages.password}
            containerStyle={styles.textInputSpacingStyle}
            textVal={password}
            placeholder="Password*"
            textChange={text => changePassword(text)}
          />

          <Input
            img={allImages.confirmPw}
            containerStyle={styles.textInputSpacingStyle}
            textVal={conformPassword}
            placeholder="Confirm Password*"
            textChange={text => changeConformPassword(text)}
          />
        </View>

        <View
          style={{marginLeft: wp('10'), width: wp('85'), marginTop: hp('12')}}>
          <Button
            btnPress={() => navigation.navigate('GradeCourseScreen')}
            addShadow
            title="SignUp"
          />
        </View>

        <View
          style={{
            alignSelf: 'center',
            flexDirection: 'row',
            marginTop: hp('5'),
          }}>
          <View>
            <Text style={styles.textFontStyle}>Have Account?</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginScreen')}
            activeOpacity={0.8}>
            <Text style={[styles.textFontStyle, {color: allColors.theme}]}>
              {' '}
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputSpacingStyle: {
    marginTop: hp('3.5'),
  },
  textFontStyle: {
    fontSize: wp('4'),
    color: '#000',
  },
});

export default SignUpScreen;
