import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

const BookMarkScreen = () => {

  return (
    <View>
      <Text style={{fontSize:32}}>Book Mark</Text>
      <Text>how does it feel</Text>
      <Text>hello</Text>
      <Button title="book" color="#d66" />
    </View>
  );
};

function BookMark({ navigation }) {

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
      <Stack.Screen name="bookmark" component={BookMarkScreen} />
    </Stack.Navigator>
  );
};

export default BookMark;
