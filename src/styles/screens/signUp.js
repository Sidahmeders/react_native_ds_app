import { StyleSheet, Dimensions, Platform } from 'react-native';

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

export default StyleSheet.create({
  splash_container: {
    flex: 1, 
    backgroundColor: '#fff'
  },
  splash_header: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center'
  },
  spalsh_logo: {
      width: height_logo,
      height: height_logo
  },
  splash_footer: {
      flex: 2,
      justifyContent:"center",
      backgroundColor: '#26d',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 25,
      paddingHorizontal: 40
  },
  spalsh_title: {
      color: '#fff',
      fontSize: 25,
      fontWeight: "bold",
      paddingBottom: 20
  },
  spalsh_button_login: {
      marginTop: 10,
      marginLeft: 50,
      marginRight: 50
  },
  spalsh_button_register: {
      marginLeft: 50,
      marginRight: 50,
      marginTop: 18
  },
  spalsh_button_text: {
    color:"#fff", 
    fontSize: 22,
    letterSpacing:2
  },
  login_container: {
    flex: 1, 
    backgroundColor: '#26d'
  },
  login_header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  login_footer: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 20
  },
  login_text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
  },
  login_text_footer: {
      color: '#05375a',
      fontSize: 24,
      marginTop: 30
  },
  login_action: {
      flexDirection: 'row',
      marginTop: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  login_textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 15,
      color: '#05375a',
      fontSize: 22
  },
  login_button: {
      alignItems: 'center',
      marginTop: 55
  },
  login_loginBtn: {
      width: '90%',
      height: 55,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      borderWidth:2,
      borderColor:"#09d"
  },
  login_loginText: {
      fontSize: 26,
      fontWeight: 'bold',
      color:"#09d",
      letterSpacing:4
  }
});
