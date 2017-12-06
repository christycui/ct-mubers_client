import React from "react";
import { View } from "react-native";
import { Card, Button, ButtonGroup, FormLabel, FormInput, Text } from "react-native-elements";
import { onSignUp } from "../auth";

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  constructor(props) {
    super(props)
    this.state = {
      screen: null,
      index: 0, // 0 is client 1 is mover
      profile: {
        home: {
          street: null,
          city: null,
          state: null,
          zip: null
        },
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
    const { navigate } = this.props.navigation;
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
          <FormInput placeholder="Email address..." />
          <FormLabel>Password</FormLabel>
          <FormInput secureTextEntry placeholder="Password..." />
          <FormLabel>Confirm Password</FormLabel>
          <FormInput secureTextEntry placeholder="Confirm Password..." />
        
          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#744BAC"
            title="SIGN UP"
            onPress={() =>
              navigate('PhoneNumber', this.state )
            }
          />
        </Card>
        <Text style={{fontSize: 13, textAlign: 'center', marginTop: 10}}>If you already have an account</Text>
        <Button
          buttonStyle={{ alignItems:"flex-start", borderRadius:10 }}
          backgroundColor="#744BAC"
          textStyle={{ color: "white" }}
          title="Sign In"
          onPress={() => navigate("SignIn")}
        />
      </View>
    )
  }
}
