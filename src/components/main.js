import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';


const Main = ({ navigation }) => {

  return (
    <View>
      <Text>What are waiting for</Text>
      <TextInput placeholder="enter your quirk.." />
      <Button color="red" title="submit your state"/>
      <View style={{width:"50%", marginTop:"118%"}}>
        <Button 
          title="<OPEN"
          color="#335"
          onPress={() => navigation.openDrawer()}
        />
      </View>
    </View>
  );
};

export default Main;