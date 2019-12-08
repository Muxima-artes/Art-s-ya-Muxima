import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AddProductScreen from '../screens/AddProductScreen';
import BuyProductScreen from '../screens/buyProductScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
// import LoginScreen from '../screens/LoginScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

const CategoriesStack = createStackNavigator({
  Categories: CategoriesScreen,
})

CategoriesStack.navigationOptions = {
  tabBarLabel: 'Categories',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-list${focused ? '' : '-outline'}`
          : 'md-list'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' 
          ? `ios-cart${focused ? '' : '-outline'}`
          : 'md-cart'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  AddProduct: AddProductScreen,
  BuyProduct: BuyProductScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-settings${focused ? '' : '-outline'}`
          : 'md-settings'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  CategoriesStack,
  LinksStack,
  SettingsStack,
},{
  tabBarOptions: { 
    showLabel: false, 
  }
});
