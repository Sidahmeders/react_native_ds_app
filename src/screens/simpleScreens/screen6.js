import React from 'react';
import { View, Text, Button } from 'react-native';

function Screen6({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', fontSize: 25 }}>
        <Text>Screen Six man.</Text>
        <Text>in order to win you have to use it........</Text>
        <Button color="#f63" title="screenFive" onPress={() => navigation.navigate('screen-5')} />
        </View>
    );
}

export default Screen6;