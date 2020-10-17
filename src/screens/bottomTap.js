import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import MainStackScreen from './main';
import Explore from './expolre';
import Screen1 from './simpleScreens/screen1';
import Screen2 from './simpleScreens/screen2';
import Screen3 from './simpleScreens/screen3';
import Screen4 from './simpleScreens/screen4';
import Screen5 from './simpleScreens/screen5';
import Screen6 from './simpleScreens/screen6';

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const BottomTab = createMaterialBottomTabNavigator();

const HomeStackScreen = ({ navigation }) => {

  return (
    <HomeStack.Navigator screenOptions={{
      headerStyle: { backgroundColor:"#259" },
      headerTintColor: "#fff",
      headerLeft: () => (
        <Icons.Button
          name="ios-menu" size={32}
          backgroundColor="#259" onPress={() => navigation.openDrawer()}
        />
      )
    }}>
      <HomeStack.Screen name="screen1" component={Screen1} />
      <HomeStack.Screen name="screen2" component={Screen2} />
      <HomeStack.Screen name="screen-3" component={Screen3} />
      <HomeStack.Screen name="screen_4" component={Screen4} />
    </HomeStack.Navigator>
  );
};

const DetailStackScreen = ({ navigation }) => {

  return (
    <DetailStack.Navigator screenOptions={{
      headerStyle: { backgroundColor:"#259" },
      headerTintColor: "#fff",
      headerLeft: () => (
        <Icons.Button
          name="ios-menu" size={32}
          backgroundColor="#259" onPress={() => navigation.openDrawer()}
        />
      )
    }}>
      <DetailStack.Screen name="screen-5" component={Screen5} />
      <DetailStack.Screen name="screen-6" component={Screen6} />
    </DetailStack.Navigator>
  );
};

const MainBottomTab = () => {

    return (
      <BottomTab.Navigator screenOptions={{
        tabBarColor: "#259"
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: "#259",
          tabBarIcon: ({ color, size }) => (
            <Icons name="ios-home" color={color} size={33} />
          ),
        }}
      />
      <BottomTab.Screen
        name="details"
        component={DetailStackScreen}
        options={{
          tabBarLabel: 'details',
          tabBarIcon: ({ color, size }) => (
            <Icons name="ios-notifications" color={color} size={25} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Main"
        component={MainStackScreen}
        options={{
          tabBarLabel: 'main',
          tabBarIcon: ({ color, size }) => (
            <Icons name="ios-paper" color={color} size={25} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size }) => (
            <Icons name="ios-aperture" color={color} size={25} />
          ),
        }}
      />
    </BottomTab.Navigator>
    );
};

export default MainBottomTab;
