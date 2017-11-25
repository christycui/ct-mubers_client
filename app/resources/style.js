import { StyleSheet } from "react-native";

const LOGIN = 'lg';
const SIGNUP = 'su';
const ENTER_PHONE = 'ep';
const ENTER_CODE  = 'ec';
const ENTER_JOB   = 'ej';
const ENTER_LOCATION = 'el';
const SET_MILES = 'sm';
const ADD_DESC = 'ad';
const PROFILE = 'profile';
const POSTS = 'po';

const MAX_LENGTH_CODE = 6;
const MAX_LENGTH_NUMBER = 20;

export const brandColor = '#744BAC';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    contentItem: {
      marginTop: 20,
      padding: 10
    },
    textRight: {
      flex:1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      height: 30
    },
    textInput: {
      padding: 0,
      margin: 0,
      flex: 1,
      fontSize: 25,
      color: brandColor,
      width: 150,
      textAlign: 'center'
    },
    button: {
      marginTop: 20,
      height: 50,
      backgroundColor: brandColor,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold'
    },
    wrapper: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#222'
    },
  
    // This style tells the map element to fill the entire space of its parent
    map: {
      ...StyleSheet.absoluteFillObject
    }
  }); 