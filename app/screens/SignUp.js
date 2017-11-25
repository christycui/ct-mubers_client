import React from "react";
import { View } from "react-native";
import { Card, Button, FormLabel, FormInput, TextInput } from "react-native-elements";
import { onSignIn } from "../auth";

export default class SignUp extends React.Component {
  constructor (props) {
    super(props)
    console.log(props)
  }
  render() {
    const { navigate } = this.props.navigation;
    
  }
}