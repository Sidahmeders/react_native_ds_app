import React from 'react';
import { View, Text, Button} from 'react-native';

function Screen4({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Screen Four.</Text>
        <Button 
          title="pop"
          color="#d4f"
          onPress={() => navigation.pop()}
        />
        </View>
    );
}

export default Screen4;
