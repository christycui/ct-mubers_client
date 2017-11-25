import React from 'react';
import Styles from '../../resources/style'

import { 
    ButtonGroup, Button, 
    FormLabel, FormInput, 
    Header,
    Icon,  
    KeyboardAvoidingView,
    Text, TextInput, TouchableOpacity,
    View 
} from 'react-native';
// import { onSignUp } from "../auth";

export default class Location extends React.Component {
    
    constructor(props) {
        super(props)
        this.props = props;
        // console.log(props)
    }
   
    onSubmit = (location) => {
        //TODO: INTEGRATE GOOGLE LOCATION API
        //TODO: ERROR HANDLING
        //TODO: UPDATE DB
        if (this.props.setProfile == true) {
            //this.setState({screen: PROFILE, setProfile: false})
            this.props.navigation.navigate("Profile", this.props)
        } else {
            // this.setState({screen: SET_MILES})
            this.props.navigation.navigate("SetMiles", this.props)
        }
    }
    render() {
        return (
            <KeyboardAvoidingView behavior={'padding'} style={[Styles.container, {backgroundColor: 'white', padding: 40}]}>
                <Text h4>What's your location?</Text>
                <View style={{ flexDirection: 'row'}}>
                <TextInput
                    type={'TextInput'}
                    underlineColorAndroid={'transparent'}
                    keyboardType='ascii-capable'
                    style={Styles.textInput}
                    returnKeyType='search'
                    autoFocus
                    placeholderTextColor={Styles.brandColor}
                    selectionColor={Styles.brandColor}
                    placeholder={this.props.navigation.state.params.profile.location}
                    onSubmitEditing={this.onSubmit}
                    maxLength={50} />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

  