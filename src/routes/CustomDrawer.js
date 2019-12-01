import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import {allImages, allColors} from '../styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {globalStyle} from '../component/Style/GlobalStyle';
import DrawerTab from './DrawerTab';

const CustomDrawer = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View
          style={{
            height: hp(25),

            borderBottomEndRadius: wp(10),
            borderBottomLeftRadius: wp(10),
            backgroundColor: allColors.theme,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.container2}>
            <Image
              source={allImages.user}
              style={{height: wp(22), width: wp(22), tintColor: 'white'}}
            />
          </View>
          <Text style={{fontSize: wp(5.5), color: 'white'}}>Lorem Ipsum</Text>
          <Text>Guest Member</Text>
        </View>
        <View
          style={{
            height: hp(3),
            width: wp(60),
            borderRadius: wp(8),
            backgroundColor: allColors.theme,
            marginTop: hp(2),
            alignSelf: 'center',
          }}
        />
      </View>
      <View style={{flex: 2, borderWidth: 1}}>
        <DrawerTab title="Convert Points" icon={allImages.email} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container2: {
    height: wp(28),
    width: wp(28),
    borderRadius: wp(14),
    backgroundColor: allColors.theme,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    ...globalStyle.shadowStyle,
  },
});

export default CustomDrawer;
