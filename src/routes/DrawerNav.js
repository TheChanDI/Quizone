import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {
  HomeScreen,
  LeaderBoardScreen,
  AddQuestionScreen,
  VerifyQuestionScreen,
  SettingScreen,
} from '../screens/BottomTab';
import CustomDrawer from './CustomDrawer';

const HomeStack = createStackNavigator(
  {
    HomeScreen: HomeScreen,
  },
  {
    headerMode: 'none',
  },
);

const BottomTab = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
  },
  Leader: {
    screen: LeaderBoardScreen,
  },
  addQuestion: {
    screen: AddQuestionScreen,
  },
  verifyQuestion: {
    screen: VerifyQuestionScreen,
  },
  setting: {
    screen: SettingScreen,
  },
});

const DrawerNav = createDrawerNavigator(
  {
    BottomTab: BottomTab,
  },
  {
    contentComponent: CustomDrawer,
  },
);

export default DrawerNav;
