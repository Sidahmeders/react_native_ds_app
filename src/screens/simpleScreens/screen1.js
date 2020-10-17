import React from 'react';
import { View, Text, Button } from 'react-native';

function Screen1({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', fontSize: 24 }}>
        <Text>Screen 1.</Text>
        <Button 
          title="go to screen-2"
          color="green"
          onPress={() => navigation.navigate('screen2')}
        />
        </View>
    );
};

export default Screen1;
