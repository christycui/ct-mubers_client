import React from "react";
import Styles from "../resources/style"
import { KeyboardAvoidingView, TextInput, View } from "react-native";
import { Card, Button, FormLabel, FormInput, Text } from "react-native-elements";
import { onSignIn } from "../auth";

export default class PhoneNumber extends React.Component {
    constructor (props) {
        super(props);
        this.props = props;
        this.state = props.navigation.state.params;
    }

    onSubmit = (location) => {
        console.log("IM ON THE PHONE NUMBER!")
        console.log(this.state)
        //TODO: INTEGRATE GOOGLE LOCATION API
        //TODO: ERROR HANDLING
        //TODO: UPDATE DB
        if (this.state.setProfile) {
            console.log("PROFILE IS TRUE!")
            this.props.navigation.navigate("Profile", this.state)
        } else {
            console.log("ARE YOU COMING HERE???!")
            this.props.navigation.navigate("Confirmation", this.state)
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return(
        <Card title="What's your phone number?">
            <View style={{ flexDirection: 'row'}}>
                <TextInput
                    ref = ""
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
                buttonStyle={{ marginTop: 20 }}
                backgroundColor="#03A9F4"
                title="NEXT"
                onPress={() => {
                    this.onSubmit();
                }}/>
            </Card>
        )
  }
}