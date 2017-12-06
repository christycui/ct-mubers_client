import React from 'react';
import Styles from '../../resources/style'

import { 
    Icon,  
    KeyboardAvoidingView,
    Text, TextInput, TouchableOpacity,
    View 
} from 'react-native';
import { Button, Card } from "react-native-elements";

export default class SetMiles extends React.Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.navigate = this.props.navigation.navigate;
    }

    onSubmit = (miles) => {
        // TODO: save to DB
        if (this.props.navigation.state.params.setProfile == true) {
            console.log("THIS IS FROM SETMILES A", this.props)
            //this.setState({screen: PROFILE, setProfile: false})
            this.navigate("AddDesc", this.props.navigation.state.params );
        } else {
            console.log("THIS IS FROM SETMILES B", this.props)
            this.navigate("AddDesc", this.props.navigation.state.params );
        }
    }
    
    render() {
        return (
            <Card title="How far are you willing to go?">
                <View style = {{ flexDirection: 'row'}}>
                <TextInput
                    type = { 'TextInput' }
                    keyboardType = 'numeric'
                    style = { Styles.textInput }
                    returnKeyType = 'go'
                    autoFocus
                    placeholderTextColor = { Styles.brandColor }
                    selectionColor = { Styles.brandColor }
                    onSubmitEditing = { this.onSubmit }
                    onChangeText={(value) => this.props.navigation.state.params.profile.distance = value }
                    maxLength = { 2 }
                    defaultValue = {'5'} /><Text style = {{ fontSize: 25, color: Styles.brandColor }}>Miles</Text>
                </View>
                <Button
                        buttonStyle={{ marginTop: 20 }}
                        backgroundColor="#03A9F4"
                        title = "NEXT"
                        onPress = { this.onSubmit }
                    />
            </Card>
        );
    }
}