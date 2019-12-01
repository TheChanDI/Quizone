import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {
  WelcomeScreen,
  LoginScreen,
  SignUpScreen,
  GradeCourseScreen,
} from '../screens/intro';
import DrawerNav from './DrawerNav';

// const Routes = createStackNavigator(
//   {
//     WelcomeScreen: WelcomeScreen,
//     LoginScreen: LoginScreen,
//     SignUpScreen: SignUpScreen,
//     GradeCourseScreen: GradeCourseScreen,
//     DrawerNav: DrawerNav,
//   },
//   {
//     headerMode: 'none',
//   },
// );

const AuthStack = createStackNavigator(
  {
    LoginScreen: LoginScreen,
    SignUpScreen: SignUpScreen,
    GradeCourseScreen: GradeCourseScreen,
  },
  {
    headerMode: 'none',
  },
);

const Routes = createSwitchNavigator({
  WelcomeScreen: WelcomeScreen,
  AuthStack: AuthStack,
  DrawerNav: DrawerNav,
});

export default createAppContainer(Routes);
