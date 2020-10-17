import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

const FormScreen = () => {

  return(
    <View>
      <Text>please read and fill the form carefully.</Text>
      <View>
          <Text>what is your name</Text>
          <TextInput placeholder="name.." />
      </View>
      <View>
          <Text>what is your age</Text>
          <TextInput placeholder="age.." />
      </View>
      <Button color="green" title="submit my form" />
    </View>
  );
};

function Form({ navigation }) {

  return (
    <Stack.Navigator screenOptions={{
      headerStyle: { backgroundColor:"#259" },
      headerTintColor: "#fff",
      headerLeft: () => (
        <Icons.Button 
          name="ios-menu" size={32}
          backgroundColor="#259" onPress={() => navigation.openDrawer()} />
      )
    }}>
      <Stack.Screen name="forms" component={FormScreen} />
    </Stack.Navigator>
  );
};

export default Form;