import React from "react";
import Styles from "../resources/style"
import { KeyboardAvoidingView, TextInput, View } from "react-native";
import { Card, Button, FormLabel, FormInput, Text } from "react-native-elements";
import { onSignIn } from "../auth";

export default class PhoneNumber extends React.Component {
    constructor (props) {
        super(props);
        this.state = props.navigation.state.params;
    }
    render() {
        const { navigate } = this.props.navigation;
        return(
        <Card title="What's your phone number?">
            <View style={{ flexDirection: 'row'}}>
                <TextInput
                    type={'TextInput'}
                    underlineColorAndroid={'transparent'}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    keyboardType={'numeric'}
                    style={Styles.textInput}
                    returnKeyType='go'
                    autoFocus
                    placeholderTextColor={Styles.brandColor}
                    selectionColor={Styles.brandColor}
                    placeholder={this.props.navigation.state.params.profile.phoneNumber}
                    maxLength={10} />
                </View>
        
                <Button
                buttonStyle={{ marginTop: 20 }}
                backgroundColor="#03A9F4"
                title="NEXT"
                onPress={() => onSignIn()}
                />
            </Card>
        )
  }
}