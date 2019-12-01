import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {allColors, allImages} from '../../styles';

import LogoView from '../../component/LogoView';
import Input from '../../component/Input/Input';

import {Button, SocialMediaButton} from '../../component/Button';

const LoginScreen = ({navigation}) => {
  const [userName, changeUserName] = useState('');
  const [password, changePassword] = useState('');

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View
        style={{
          paddingTop: hp(5),
          height: hp('25'),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <LogoView imgStyle={{width: wp(60)}} />
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
          placeholder="Username/Email"
          textChange={text => changeUserName(text)}
        />

        <Input
          img={allImages.password}
          containerStyle={styles.textInputSpacingStyle}
          textVal={password}
          placeholder="Password"
          textChange={text => changePassword(text)}
        />
      </View>
      <View style={{marginLeft: wp('10'), width: wp('85'), marginTop: hp('6')}}>
        <Button
          btnPress={() => navigation.navigate('DrawerNav')}
          addShadow
          title="Login"
        />

        <View
          style={{
            alignSelf: 'center',
            marginTop: hp('3'),
            alignItems: 'center',
            width: '100%',
          }}>
          <View>
            <Text style={styles.textFontStyle}>Forgot your password?</Text>
          </View>

          <View
            style={{marginTop: hp('3'), flexDirection: 'row', width: '100%'}}>
            <View style={styles.dashlineContainerStyle}>
              <View style={styles.dashStyle} />
            </View>
            <View style={{}}>
              <Text
                style={[
                  styles.textFontStyle,
                  {fontWeight: 'bold', paddingHorizontal: wp('1')},
                ]}>
                OR
              </Text>
            </View>
            <View style={styles.dashlineContainerStyle}>
              <View style={styles.dashStyle} />
            </View>
          </View>

          <View style={{marginTop: hp('3')}}>
            <Text style={styles.textFontStyle}>
              Sign in with Social Network
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: hp('4'),
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <SocialMediaButton
              titleStyle={{color: '#fff'}}
              backgroundColor="#4168B4"
              title="Facebook"
              icon={allImages.facebook}
            />

            <SocialMediaButton
              titleStyle={{color: '#fff'}}
              backgroundColor="#E5E6E7"
              title="Google"
              icon={allImages.google}
            />
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: hp('5'),
          width: '100%',
          justifyContent: 'center',
        }}>
        <View>
          <Text style={styles.textFontStyle}>Not a member yet? </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUpScreen')}
          activeOpacity={0.8}>
          <Text style={[styles.textFontStyle, {color: allColors.theme}]}>
            SignUp
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textInputSpacingStyle: {
    marginTop: hp('3'),
  },
  textFontStyle: {
    fontSize: wp('4'),
    color: '#000',
  },
  dashlineContainerStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: wp('1.5'),
  },
  dashStyle: {width: '100%', height: 1, backgroundColor: '#000'},
});

export default LoginScreen;
