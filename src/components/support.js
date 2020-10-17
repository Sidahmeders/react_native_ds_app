import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

const SupportScreen = () => {

  return (
    <View>
      <Text style={{fontSize:32, margin: 10}}>Support</Text>
        <Text>name: Monky_D Luffy.</Text>
        <Text>Age: 23</Text>
        <Text>DevilFruit: Gomugomuno</Text>
        <Text>Crew: starw hat</Text>
        <Text>RightHand: Rononowa Zoro.</Text>
        <Text>Bounty: undefined (Above 10 billion)</Text>
        <View style={{width:"50%", marginTop:"95%"}}>
      </View>
    </View>
  );
};

function Support({ navigation }) {

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
      <Stack.Screen name="support" component={SupportScreen} />
    </Stack.Navigator>
  );
};

export default Support;
