import React from "react";
import { Card, Button, FormLabel, FormInput, TextInput, View } from "react-native";
import { StackNavigator } from "react-navigation";

import { Mover } from "./mover/Mover";
// import { onSignIn } from "../auth";

export default class SignUp extends React.Component {
  constructor (props) {
    super(props)
    this.props = props;
  }
  render() {
    const { navigate } = this.props.navigation;
    switch(this.props.navigation.state.params.index) {
      // case 0:
      //   return <Client />;
      case 1:
        return <Mover { ...this.props }/>;
    }
  }
}