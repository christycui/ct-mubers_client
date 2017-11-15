import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ButtonGroup, Button } from 'react-native-elements';

const LOGIN = 'lg';
const SIGNUP = 'su';
const ENTER_PHONE = 'ep';
const ENTER_CODE  = 'ec';
const ENTER_JOB   = 'ej';
const SEARCHING   = 'sr';

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
      activity: false,
      screen: LOGIN,
      index: 0 // 0 is client 1 is mover
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
          onPress={onLogin}
          large
          icon={{name: 'input'}}
          backgroundColor='#88edfc' />
          <Button title='SIGN UP'
          onPress={onSignup}
          large
          icon={{name: 'input'}}
          backgroundColor='#88edfc' />
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
  }
});
