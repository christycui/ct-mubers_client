import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { ButtonGroup, Button, Text, FormLabel, FormInput, Icon, Header } from 'react-native-elements';
// import { onSignUp } from "../auth";


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

const brandColor = '#744BAC';

export default class Location extends React.Component {
    
    constructor(props) {
        super(props)
        console.log(props)
    }
    onSubmit = (location) => {
        //TODO: INTEGRATE GOOGLE LOCATION API
        //TODO: ERROR HANDLING
        //TODO: UPDATE DB
        if (props.setProfile == true) {
            //this.setState({screen: PROFILE, setProfile: false})
            navigate("PROFILE", this.props)
        } else {
            this.setState({screen: SET_MILES})
            navigate("SETMILES", this.props)
        }
    }
    render() {
        return (
            <KeyboardAvoidingView behavior={'padding'} style={[styles.container, {backgroundColor: 'white', padding: 40}]}>
                <Text h4>What's your location?</Text>
                <View style={{ flexDirection: 'row'}}>
                <TextInput
                    type={'TextInput'}
                    underlineColorAndroid={'transparent'}
                    keyboardType='ascii-capable'
                    style={styles.textInput}
                    returnKeyType='search'
                    autoFocus
                    placeholderTextColor={brandColor}
                    selectionColor={brandColor}
                    placeholder={this.state.profile.location}
                    onSubmitEditing={onSubmit}
                    maxLength={50} />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
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

// onSubmit = (location) => {
//     //TODO: INTEGRATE GOOGLE LOCATION API
//     //TODO: ERROR HANDLING
//     //TODO: UPDATE DB
//     if (this.state.setProfile == true) {
//       this.setState({screen: PROFILE, setProfile: false})
//     } else {
//       this.setState({screen: SET_MILES})
//     }
//   }
  