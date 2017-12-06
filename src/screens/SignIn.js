import React from "react";
import { View } from "react-native";
import { Card, Button, ButtonGroup, FormLabel, FormInput, Text } from "react-native-elements";
import { onSignUp } from "../auth";

export default class SignIn extends React.Component {
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
            }
        }
    }

    render() {
        updateIndex = (index) => {
            this.setState({ index })
        }
        const { navigate } = this.props.navigation;
        return(
            <View style={{ paddingVertical: 20 }}>
            <Card title="Sign In">
              <FormLabel>Email</FormLabel>
              <FormInput placeholder="Email address..." />
              <FormLabel>Password</FormLabel>
              <FormInput secureTextEntry placeholder="Password..." />
            
              <Button
                buttonStyle={{ marginTop: 20 }}
                backgroundColor="#744BAC"
                title="SIGN IN"
                onPress={() =>
                  navigate('Profile', this.state )
                }
              />
            </Card>
          </View>
        )
    }
}
