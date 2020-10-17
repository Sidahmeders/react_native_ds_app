import 'react-native-gesture-handler';
import React,{ useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ContextConsumer } from './context';

import SignUpPage from './src/screens/signUp';
import BottomTab from './src/screens/bottomTap';
import DrawerContent from './src/screens/drawerContent';
import Main from './src/components/main';
import Category from './src/components/categories';
import BookMark from './src/components/bookMark';
import Forms from './src/components/form';
import Support from './src/components/support';
import { ActivityIndicator } from 'react-native-paper';
import { View } from 'react-native';

const Drawer = createDrawerNavigator();
const TopTab = createMaterialTopTabNavigator();


function App() {

  const context = useContext(ContextConsumer);
  const {isLoading, userToken } = context;

  if(isLoading) {
    return (
      <View style={{flex:1, justifyContent:"center"}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {userToken ? (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>} >
        <Drawer.Screen name="bottom-tab" component={BottomTab} />
        <Drawer.Screen name="main" component={Main} />
        <Drawer.Screen name="categories" component={Category} />
        <Drawer.Screen name="bookmark" component={BookMark} />
        <Drawer.Screen name="forms" component={Forms} />
        <Drawer.Screen name="support" component={Support} />
      </Drawer.Navigator>
      ) : (
        <SignUpPage />
      )}
    </NavigationContainer>
  );
};

export default App;
