import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import CurveHeader from '../../../component/CurveHeader';
import {allImages, allColors} from '../../../styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Button} from '../../../component/Button';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <CurveHeader
        leftEvent={() => navigation.toggleDrawer()}
        title="Home"
        icon={allImages.user}
      />
      <View style={styles.container1}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.container2}>
            <Image
              source={allImages.user}
              style={{height: wp(25), width: wp(25), tintColor: 'white'}}
            />
          </View>
          <TouchableOpacity style={{marginLeft: -wp(4)}}>
            <Image
              source={allImages.editIcon}
              style={{height: wp(6), width: wp(6)}}
            />
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: wp(6)}}>Lorem Ipsum</Text>
        <Text>Guest Member</Text>

        <View
          style={{
            height: hp(3),
            width: wp(80),
            borderRadius: wp(8),
            backgroundColor: allColors.theme,
            marginTop: hp(4),
            marginBottom: hp(2),
          }}
        />
        <Text>Your Points</Text>
      </View>
      <View style={{marginHorizontal: wp(10), marginTop: hp(2)}}>
        <Text style={{fontSize: wp(5), textAlign: 'center'}}>
          Do you know you can add questions and add points ?
        </Text>
      </View>
      <View
        style={{
          flex: 1,

          justifyContent: 'flex-end',
          marginHorizontal: wp(10),
          marginBottom: hp(2),
        }}>
        <Button title="Choose Your Subject" titleStyle={{color: 'white'}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    height: hp(45),
    width: wp(90),
    elevation: 2,
    backgroundColor: 'white',
    borderRadius: wp(4),
    alignSelf: 'center',
    marginTop: -hp(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    height: wp(34),
    width: wp(34),
    borderRadius: wp(17),
    backgroundColor: allColors.theme,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
