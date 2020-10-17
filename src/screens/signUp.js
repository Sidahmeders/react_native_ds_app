import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SpalshScreen from './signUp/splash';
import LoginScreen from './signUp/login';
import RegisterScreen from './signUp/register';

const Stack = createStackNavigator();

function SignUp() {

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="spalsh" component={SpalshScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default SignUp;
