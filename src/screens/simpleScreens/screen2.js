import React from 'react';
import { View, Text, Button } from 'react-native';

function Screen2({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Screen Two.</Text>
        <Button
          title="take me scrren1!"
          color="red"
          onPress={() => navigation.navigate('screen1')}
        />
        <Button 
          title="go back"
          color="black"
          onPress={() => navigation.goBack()}
        />
        <Button 
          title="push"
          color="gold"
          onPress={() => navigation.push('screen-3')}
        />
        </View>
    );
};

export default Screen2;
