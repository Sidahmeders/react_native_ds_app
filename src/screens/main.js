import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

const MainStack = createStackNavigator();

import Main from '../components/main';

const MainStackScreen = ({ navigation }) => {

    return (
      <MainStack.Navigator screenOptions={{
        headerStyle: { backgroundColor:"#259" },
        headerTintColor: "#fff",
        headerLeft: () => (
          <Icons.Button
            name="ios-menu" size={32}
            backgroundColor="#259" onPress={() => navigation.openDrawer()}
          />
        )
      }}>
        <MainStack.Screen name="Main" component={Main} />
      </MainStack.Navigator>
    );
  };

export default MainStackScreen;
