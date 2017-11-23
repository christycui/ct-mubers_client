import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { ButtonGroup, Button, Text, FormLabel, FormInput, Icon, Header } from 'react-native-elements';
import Frisbee from 'frisbee';
import Spinner from 'react-native-loading-spinner-overlay';
import Form from 'react-native-form';
import MapView from 'react-native-maps';

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

export default class App extends React.Component {
  constructor(props) {
    super(props);  // this is idiomatic boilerplate for Component Constructor

    // Application state currently only consists of
    // 1. Which SCREEN are we looking at (see the SWITCH stmt in render())
    // 2. If some loading or similar ACTIVITY is happening
    //
    // We may expect to extend the state significantly as the app grows,
    // Although much state should be encapsulated in individual components
    this.state = {
      screen: null,
      index: 0, // 0 is client 1 is mover
      profile: {
        email: null,
        phoneNumber: null, // str field
        location: null,
        distance: null,
        desc: null
      },
      setProfile: false
    }
  }

  render() {
    const {screen} = this.state;

    switch(screen) {
      default:
        updateIndex = (index) => {
          this.setState({index})
        }

        onLogin = () => {
          this.setState({screen: LOGIN})
        }

        onSignup = () => {
          this.setState({screen: SIGNUP})
        }
        return (
          <View style={styles.container}>
            <ButtonGroup
              selectedBackgroundColor="#88edfc"
              onPress={updateIndex}
              selectedIndex={this.state.index}
              buttons={["I'm moving", "I'm a mover"]}
              containerStyle={{height: 30}} />
            <Button title='LOGIN'
              borderRadius={10}
              onPress={onLogin}
              large
              icon={{name: 'input'}}
              backgroundColor={brandColor} />
            <Button title='SIGN UP'
              borderRadius={10}
              onPress={onSignup}
              large
              icon={{name: 'input'}}
              backgroundColor={brandColor} />
          </View>
        );

      case LOGIN:
        onSubmit = () => {
          // TODO: verify credentials
          // TODO: form verification
          this.setState({screen: POSTS})
        }
        return (
          <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
            <Form>
              <FormLabel>Email</FormLabel>
              <FormInput/>
              <FormLabel>Password</FormLabel>
              <FormInput/>
              <TouchableOpacity style={styles.button} onPress={onSubmit}>
                <Text style={styles.buttonText}>Log In</Text>
              </TouchableOpacity>
            </Form>
          </KeyboardAvoidingView>
        );

      case SIGNUP:
        onSubmit = () => {
          // TODO: call database to register new user
          // TODO: form verification
          this.setState({screen: ENTER_PHONE})
        }
        return (
          <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
            <Form>
              <FormLabel>Email</FormLabel>
              <FormInput/>
              <FormLabel>Password</FormLabel>
              <FormInput/>
              <TouchableOpacity style={styles.button} onPress={onSubmit}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            </Form>
          </KeyboardAvoidingView>
        );

      case ENTER_PHONE:
        onSubmit = (phoneNumber) => {
          // TODO: UPDATE DB
          // TODO: validate phone
          if (this.state.setProfile == true) {
            this.setState({screen: PROFILE, setProfile: false})
          } else {
            this.setState({screen: ENTER_LOCATION})
          }
        }
        return (
          <KeyboardAvoidingView behavior={'padding'} style={[styles.container, {backgroundColor: 'white', padding: 40}]}>
            <Text h4>What's your phone number?</Text>
            <View style={{ flexDirection: 'row'}}>
              <TextInput
                type={'TextInput'}
                underlineColorAndroid={'transparent'}
                autoCapitalize={'none'}
                autoCorrect={false}
                onEndEditing={onSubmit}
                keyboardType={'numeric'}
                style={styles.textInput}
                returnKeyType='go'
                autoFocus
                placeholderTextColor={brandColor}
                selectionColor={brandColor}
                placeholder={this.state.profile.phoneNumber}
                maxLength={10} />
            </View>
          </KeyboardAvoidingView>
      );
      break;

    case ENTER_LOCATION:
      onSubmit = (location) => {
        //TODO: INTEGRATE GOOGLE LOCATION API
        //TODO: ERROR HANDLING
        //TODO: UPDATE DB
        if (this.state.setProfile == true) {
          this.setState({screen: PROFILE, setProfile: false})
        } else {
          this.setState({screen: SET_MILES})
        }
      }
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
    
    case SET_MILES:
      onSubmit = (miles) => {
        // TODO: save to DB
        if (this.state.setProfile == true) {
          this.setState({screen: PROFILE, setProfile: false})
        } else {
          this.setState({screen: ADD_DESC})
        }
      }
      return (
        <KeyboardAvoidingView behavior={'padding'} style={[styles.container, {backgroundColor: 'white', padding: 40}]}>
            <Text h4>How far are you willing to go?</Text>
            <View style={{ flexDirection: 'row'}}>
              <TextInput
                type={'TextInput'}
                underlineColorAndroid={'transparent'}
                keyboardType='numeric'
                style={styles.textInput}
                returnKeyType='go'
                autoFocus
                placeholderTextColor={brandColor}
                selectionColor={brandColor}
                placeholder={this.state.profile.distance}
                onSubmitEditing={onSubmit}
                maxLength={2}
                defaultValue={'5'} /><Text style={{fontSize: 25, color: brandColor}}>Miles</Text>
            </View>
          </KeyboardAvoidingView>
      );

    case ADD_DESC:
      onSubmit = (miles) => {
        // TODO: save to DB
        if (this.state.setProfile == true) {
          this.setState({screen: PROFILE, setProfile: false})
        } else {
          this.setState({screen: POSTS})
        }
      }
      return (
        <KeyboardAvoidingView behavior={'padding'} style={[styles.container, {backgroundColor: 'white', padding: 40}]}>
          <View style={{paddingTop: 30, paddingRight: 20}}>
            <Text style={{textDecorationLine: 'underline', textAlign: 'right', color: brandColor, fontWeight: 'bold'}}
             onPress={() => { this.setState({screen: POSTS}) }}> > SKIP</Text>
          </View>
          <View style={{ flexDirection: 'row'}}>
            <TextInput
              type={'TextInput'}
              underlineColorAndroid={'transparent'}
              keyboardType='ascii-capable'
              style={styles.textInput}
              returnKeyType='go'
              autoFocus
              placeholderTextColor={brandColor}
              selectionColor={brandColor}
              placeholder={this.state.profile.desc}
              multiline={true}
              maxLength={300}
              defaultValue={'I am an experienced mover...'} />
          </View>
          <TouchableOpacity style={styles.button} onPress={onSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      );
    
    case POSTS:
      // TODO: Get this from the Device GPS
      // TODO: ADD AVAILABLE JOBS TO MORE LAT & LNG
      let [lat, lng] = [40.755644, -73.956097];
      return (
        <View style={styles.wrapper}>
          
          <MapView
            style={styles.map}
            customMapStyle={require('./gmap_style.json')}
            region={{
              latitude: lat,
              longitude: lng,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
            <MapView.Circle center={{latitude: lat, longitude: lng}} radius={100} strokeWidth={10} strokeColor={'rgba(200, 200, 255, .4)'}/>
          </MapView>
          <Header
            backgroundColor={brandColor}
            centerComponent={<Text style={{color: 'white'}}>AVAILABLE JOBS</Text>}
            rightComponent={
              <Text style={{textDecorationLine: 'underline', color: 'white', fontWeight: 'bold'}}
                  onPress={() => { this.setState({screen: PROFILE}) }}> > PROFILE</Text>
            }/>
        </View>
      );

    case PROFILE:
      // TODO: RESET PROFILE VARS FROM DB
      return (
        <View>
          <View style={{paddingTop: 30, paddingRight: 20}}>
            <Text style={{textDecorationLine: 'underline', textAlign: 'right', color: brandColor, fontWeight: 'bold'}}
             onPress={() => { this.setState({screen: POSTS}) }}> > JOBS</Text>
          </View>
          <View style={styles.contentItem}>
            <View>
              <Text h4 style={{textAlign: 'center'}}>My Profile</Text>
            </View>
          </View>
          
          <View>
            <View style={styles.contentItem}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View>
                  <Text>Email: {this.state.profile.email}</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentItem}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View>
                  <Text>Phone: {this.state.profile.phone}</Text>
                </View>
                <View style={styles.textRight}>
                  <Text style={{textDecorationLine: 'underline'}} onPress={() => { this.setState({screen: ENTER_PHONE, setProfile: true}) }}>Edit</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentItem}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View>
                  <Text>Location: {this.state.profile.location}</Text>
                </View>
                <View style={styles.textRight}>
                  <Text style={{textDecorationLine: 'underline'}} onPress={() => { this.setState({screen: ENTER_LOCATION, setProfile: true}) }}>Edit</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentItem}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View>
                  <Text>Job Distance (miles): {this.state.profile.distance}</Text>
                </View>
                <View style={styles.textRight}>
                  <Text style={{textDecorationLine: 'underline'}} onPress={() => { this.setState({screen: SET_MILES, setProfile: true}) }}>Edit</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentItem}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View>
                  <Text>Description: {this.state.profile.desc}</Text>
                </View>
                <View style={styles.textRight}>
                  <Text style={{textDecorationLine: 'underline'}} onPress={() => { this.setState({screen: ADD_DESC, setProfile: true}) }}>Edit</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.contentItem}>
            <Text h4 style={{padding: 30, textAlign: 'center'}}>Activities</Text>
          </View>
        </View>
      );
    }
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
