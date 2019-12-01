import React, {useEffect} from 'react';
import {View, Text, Image, StatusBar, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {allColors, allImages} from '../../styles';

const WelcomeScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 1000);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={allColors.theme} />
      <View style={styles.firstCircle}>
        <View style={styles.secondCircle}>
          <View style={styles.thirdCircle}>
            <Image
              source={allImages.SplashLogo}
              style={{height: wp(30), width: wp(30), tintColor: 'white'}}
            />
          </View>
        </View>
      </View>
      <View style={{position: 'absolute', bottom: hp(5)}}>
        <Image source={allImages.Logo} style={{height: hp(8), width: wp(50)}} />
        <Text style={{fontSize: wp(6), textAlign: 'center', color: '#fff'}}>
          Lets learn with fun
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: allColors.theme,
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstCircle: {
    height: wp(60),
    width: wp(60),
    borderRadius: wp(30),
    backgroundColor: 'rgba(69,202,162,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondCircle: {
    height: wp(50),
    width: wp(50),
    borderRadius: wp(25),
    backgroundColor: 'rgba(111,203,175,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thirdCircle: {
    height: wp(40),
    width: wp(40),
    borderRadius: wp(20),
    backgroundColor: 'rgba(146,211,192,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WelcomeScreen;
