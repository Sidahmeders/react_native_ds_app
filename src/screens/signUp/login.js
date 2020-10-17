import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Styles from '../../styles/screens/signUp';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';


function Login() {

  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
    secureTextInput: true,
    checkEye: "alert-circle",
    iconColor: "grey",
    eyeIcon: "eye-off"
  });

  const onInputChange = (input, name) => {
    setLoginState(() => {
      return {
        ...loginState,
        [name]: input,
        checkEye: loginState.email.length > 5 ? "check-circle" : "alert-circle",
        iconColor: loginState.email.length > 5 ? "green" : "grey"
      }
    });
  };

  const updateSecureTextEntry = () => {
    setLoginState(() => {
      return{
        ...loginState,
        secureTextInput: !loginState.secureTextInput,
        eyeIcon: loginState.secureTextInput ? "eye" : "eye-off"
      }
    });
  };

  return (
    <View style={Styles.login_container}>
        <View style={Styles.login_header}>
          <Text style={Styles.login_text_header}>AMINE DS</Text>
        </View>
        <View style={Styles.login_footer}>
          <Text style={Styles.login_text_footer}>Email</Text>
          <View style={Styles.login_action}>
            <FontAwesome
              name="user-o"
              size={24}
            />
            <TextInput
              placeholder="enter your email.."
              style={Styles.login_textInput}
              autoCapitalize="none"
              onChangeText={input => onInputChange(input, "email")}
            />
            <Feather
              name={loginState.checkEye}
              color={loginState.iconColor}
              size={24}
            />
          </View>
          <Text style={Styles.login_text_footer}>Password</Text>
          <View style={Styles.login_action}>
            <FontAwesome
              name="lock"
              size={24}
            />
            <TextInput
              placeholder="enter your password.."
              secureTextEntry={loginState.secureTextInput}
              style={Styles.login_textInput}
              autoCapitalize="none"
              onChangeText={input => onInputChange(input, "password")}
            />
            <TouchableOpacity
              onPress={updateSecureTextEntry}
            >
              <Feather
                name={loginState.eyeIcon}
                color={loginState.iconColor}
                size={24}
              />
            </TouchableOpacity>
          </View>
          <View style={Styles.login_button}>
            <TouchableOpacity style={Styles.login_loginBtn}>
              <Text style={Styles.login_loginText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
};

export default Login;
