import React from 'react';
import Styles from '../../resources/style'

import { 
    Icon,  
    KeyboardAvoidingView,
    Picker,
    Text, TextInput, TouchableOpacity,
    ScrollView 
} from 'react-native';
import { Button, Card, FormInput, FormLabel } from 'react-native-elements';
// import { onSignUp } from "../auth";

export default class Location extends React.Component {
    
    constructor(props) {
        super(props)
        this.props = props;
        console.log("I'M ON LOCATION")
        console.log(this.props)
    }
   
    onSubmit = (location) => {
        //TODO: INTEGRATE GOOGLE LOCATION API
        //TODO: ERROR HANDLING
        //TODO: UPDATE DB
        if (this.props.setProfile == true) {
            //this.setState({screen: PROFILE, setProfile: false})
            this.props.navigation.navigate("Profile", this.props.navigation.state.params)
        } else {
            // this.setState({screen: SET_MILES})
            this.props.navigation.navigate("SetMiles", this.props.navigation.state.params)
        }
    }

    render() {
        return (
            <ScrollView>
                <Card title="What is your location?">
                    <FormLabel>Street</FormLabel>
                    <FormInput
                                type={'TextInput'}
                                keyboardType='ascii-capable'
                                style={Styles.textInput}
                                returnKeyType={"next"}
                                autoFocus
                                placeholderTextColor={Styles.brandColor}
                                selectionColor={Styles.brandColor}
                                onChangeText={(value) => this.props.navigation.state.params.profile.home.street = value }
                                placeholder={this.props.navigation.state.params.profile.home.street}
                                onSubmitEditing={(event) => { 
                                    this.refs.city.focus(); 
                                }}
                                maxLength={140} />
                    <FormLabel>City</FormLabel>
                    <FormInput
                                ref='city'
                                type={'TextInput'}
                                keyboardType='ascii-capable'
                                style={Styles.textInput}
                                returnKeyType={"done"}
                                placeholderTextColor={Styles.brandColor}
                                selectionColor={Styles.brandColor}
                                onChangeText={(value) => this.props.navigation.state.params.profile.home.city = value }
                                placeholder={this.props.navigation.state.params.profile.home.city}
                                maxLength={25} />
                    <FormLabel>State</FormLabel>
                    <FormInput
                        ref='city'
                        type={'TextInput'}
                        keyboardType='ascii-capable'
                        style={Styles.textInput}
                        returnKeyType={"done"}
                        placeholderTextColor={Styles.brandColor}
                        selectionColor={Styles.brandColor}
                        onChangeText={(value) => this.props.navigation.state.params.profile.home.state = value }
                        placeholder={this.props.navigation.state.params.profile.home.state}
                        maxLength={25} />
                    <FormLabel>Zipcode</FormLabel>
                    <FormInput
                        type = { 'TextInput' }
                        keyboardType = 'numeric'
                        style = { Styles.textInput }
                        returnKeyType = 'go'
                        onChangeText={(value) => this.props.navigation.state.params.profile.home.zip = value }
                        placeholder={this.props.navigation.state.params.profile.home.zip}
                        placeholderTextColor = { Styles.brandColor }
                        selectionColor = { Styles.brandColor }
                        maxLength = { 5 } />
                
                    <Button
                    buttonStyle={{ marginTop: 20 }}
                    backgroundColor="#744BAC"
                    title="NEXT"
                    onPress={() =>
                        this.onSubmit()
                    }
                    />
                </Card>
            </ScrollView>
        );
    }
}

  