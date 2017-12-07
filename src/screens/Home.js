import React from "react";
import { View, Alert } from "react-native";
import { Card, Button, ButtonGroup, FormLabel, FormInput, Text, FormValidationMessage } from "react-native-elements";
import { onSignUp } from "../auth";
import RestClient from 'react-native-rest-client';
import ApiClient from '../api-client';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  constructor(props) {
    super(props)
    this.state = {
      screen: null,
      index: 0, // 0 is client 1 is mover
      job_id: null,
      profile: {
        price: null,
        user_id: null,
        email: null,
        phone: null,
        password: null,
        passwordConfirm: null,
        bedrooms: null,
        description: null,
        from: {
          street: null,
          city: null,
          state: null,
          zip: null
        },
        to: {
          street: null,
          city: null,
          state: null,
          zip: null
        },
        code: null,
        distance: null,
        desc: null
      },
      setProfile: false
    }

  }

  

  render() {
    updateIndex = (index) => {
      this.setState({ index })
    }

    errorHandler = () => {
      console.log(this);
      if (this.state.profile.email === '') {
        this.emailInput.shake();
      } else if (this.state.profile.password === '') {
        this.passwordInput.shake();
      } else if (this.state.profile.password !== this.state.profile.passwordConfirm) {
        this.passwordConfirmInput.shake();
      }
    }
    const { navigate }  = this.props.navigation;
    const api = new ApiClient();
    let emailError = "hi i'm error";
    let passwordError = null;
    return (
      <View style={{ paddingVertical: 20 }}>
        <Card title="First Timer">
          <ButtonGroup
            selectedBackgroundColor="#88edfc"
            onPress={updateIndex}
            selectedIndex={this.state.index}
            buttons={["I'm moving", "I'm a mover"]}
            containerStyle={{ height: 30 }} />
          
          <FormLabel>Email</FormLabel>
          <FormInput placeholder="Email address..." 
            onChangeText={value => { 
              this.state.profile.email = value; } }
            ref = { ref => this.emailInput = ref } />
          
          <FormLabel>Password</FormLabel>
          <FormInput secureTextEntry placeholder="Password..."
            onChangeText={value => { 
              this.state.profile.password = value; } } />
          
          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#744BAC"
            title="SIGN UP"
            onPress={ () => { 
              api.createUser(this.state.profile.email, this.state.profile.password)
                .then(response => { 
                  if (response.user_id) { 
                    this.state.profile.user_id=response.user_id;
                    console.log(this.state.profile.user_id);
                    navigate("PhoneNumber", this.state);
                  } 
                } ) 
              }
            }
          />
        </Card>
        <Text style={{fontSize: 13, textAlign: 'center', marginTop: 10}}>If you already have an account</Text>
        <Button
          buttonStyle={{ alignItems:"flex-start", borderRadius:10 }}
          backgroundColor="#744BAC"
          textStyle={{ color: "white" }}
          title="Sign In"
          onPress={() => navigate("SignIn", this.state)}
        />
      </View>
    )
  }
}
