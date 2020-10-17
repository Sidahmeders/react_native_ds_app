import React from 'react';
import { View, Text, Button } from 'react-native';

function Screen5({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', fontSize: 25 }}>
        <Text>Screen Five.</Text>
        <Text>what is new tody five</Text>
        <Button title="screenSix" onPress={() => navigation.navigate('screen-6')} />
        <Button color="red" title="go-Home" onPress={() => navigation.navigate('Home')} />
        </View>
    );
}

export default Screen5;