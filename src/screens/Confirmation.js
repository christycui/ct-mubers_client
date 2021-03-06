import React from "react";
import Styles from "../resources/style"
import { KeyboardAvoidingView, TextInput, View } from "react-native";
import { Card, Button, FormLabel, FormInput, Text } from "react-native-elements";
import { onSignIn } from "../auth";

export default class Confirmation extends React.Component {
    constructor (props) {
        super(props);
        this.state = props.navigation.state.params;
    }

    changeStateOfButton = () => {
        console.log(this.refs.verifyCode)
    }

    render() {
        const { navigate } = this.props.navigation;
        return(
        <Card title="Confirmation Code">
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
                    onChangeText={(value) => this.state.profile.phone = value }
                    selectionColor={Styles.brandColor}
                    placeholder={this.state.profile.phone}
                    maxLength={10} />
                </View>
        
                <Button
                disabled={false}
                buttonStyle={{ marginTop: 20 }}
                backgroundColor="#03A9F4"
                title="NEXT"
                onPress={() => {
                    if (this.state.index === 1) {
                        navigate("Mover", this.state)
                    } else {
                        navigate("Client", this.state)   
                    }
                }}/>
                <Button
                    buttonStyle={{ marginTop: 20 }}
                    backgroundColor="#03A9F4"
                    title="Verification code"
                    onPress={() => {
                        this.changeStateOfButton()
                }}/>
            </Card>
        )
  }
}