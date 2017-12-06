import React from 'react';
import Styles from '../../resources/style'

import { 
    Icon,  
    KeyboardAvoidingView,
    Text, TextInput, TouchableOpacity,
    View 
} from 'react-native';
import { Button, Card } from "react-native-elements";

export default class Price extends React.Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.navigate = this.props.navigation.navigate;
    }

    onSubmit = (price) => {
        // TODO: save to DB
        if (this.props.navigation.state.params.setProfile == true) {
            //this.setState({screen: PROFILE, setProfile: false})
            this.navigate("Summary", this.props.navigation.state.params );
        } else {
            this.navigate("Summary", this.props.navigation.state.params );
        }
    }
    
    render() {
        return (
            <Card title="How much are you paying?">
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
                    maxLength = { 3 } /><Text style = {{ fontSize: 25, color: Styles.brandColor }}>Dollars</Text>
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