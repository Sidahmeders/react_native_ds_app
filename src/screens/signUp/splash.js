import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Styles from '../../styles/screens/signUp';


function Spalsh({ navigation }) {

  return (
    <View style={Styles.splash_container}>
        <View style={Styles.splash_header}>
          <Image 
            source={require('../../images/splash_logo.jpg')}
            style={Styles.spalsh_logo}
            resizeMode="stretch"
          />
        </View>
        <View style={Styles.splash_footer}>
          <Text style={Styles.spalsh_title}>get and submit your exams in one click</Text>
          <View style={Styles.spalsh_button_login}>
            <TouchableOpacity
              onPress={() => navigation.navigate('login')}
              style={{
                backgroundColor:"#0d8",
                padding: (0, 6, 0, 6),
                alignItems:"center",
                borderWidth: 2,
                borderColor:"#0f8"
              }}
            >
              <Text style={Styles.spalsh_button_text}>login</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.spalsh_button_register}>
            <Text style={{color:"#fff",marginBottom:3, fontSize:20}}>don't have account</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('register')}
              style={{
                backgroundColor:"#28f",
                padding: (0, 6, 0, 6),
                alignItems:"center",
                borderWidth: 2,
                borderColor:"#09f"
              }}
            >
              <Text style={Styles.spalsh_button_text}>register</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
};

export default Spalsh;
