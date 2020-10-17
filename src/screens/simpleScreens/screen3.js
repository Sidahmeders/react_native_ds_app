import React from 'react';
import { View, Text, Button } from 'react-native';

function Screen3({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Screen three</Text>
        <Button 
          title="popToTop"
          color="#04f"
          onPress={() => navigation.popToTop()}
        />
         <Button 
          title="Replace"
          color="#2f5"
          onPress={() => navigation.replace('screen_4')}
        />
        </View>
    );
}

export default Screen3;
