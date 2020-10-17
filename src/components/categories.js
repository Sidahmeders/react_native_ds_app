import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

const CategoryScreen = () => {

  return (
    <View>
      <Text style={{fontSize:32}}>Categories</Text>
      <Text>killer</Text>
      <Text>Hunter</Text>
      <Text>Enhancer</Text>
      <Text>Doctor</Text>
    </View>
  );
};

function Category({ navigation }) {

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
      <Stack.Screen name="categories" component={CategoryScreen} />
    </Stack.Navigator>
  );
};

export default Category;
