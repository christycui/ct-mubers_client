import React from 'react';
import Styles from '../../resources/style'
import RestClient from 'react-native-rest-client';
import ApiClient from '../../api-client';
import GoogleClient from '../../google-client';
import { 
    Icon,  
    KeyboardAvoidingView,
    Picker,
    Text, TextInput, TouchableOpacity,
    ScrollView 
} from 'react-native';
import { Button, Card, FormInput, FormLabel } from 'react-native-elements';
// import { onSignUp } from "../auth";

export default class To extends React.Component {
    
    constructor(props) {
        super(props)
        this.props = props;
        this.state = props.navigation.state.params;
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
            this.props.navigation.navigate("Bedrooms", this.props.navigation.state.params)
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        const api = new ApiClient();
        const google_api = new GoogleClient();
        return (
            <ScrollView>
                <Card title = "To...">
                    <FormLabel>Street</FormLabel>
                    <FormInput
                                type={'TextInput'}
                                keyboardType='ascii-capable'
                                style={Styles.textInput}
                                returnKeyType={"next"}
                                autoFocus
                                placeholderTextColor={Styles.brandColor}
                                selectionColor={Styles.brandColor}
                                placeholder={this.state.profile.to.location}
                                onSubmitEditing={(event) => { 
                                    this.refs.city.focus(); 
                                }}
                                maxLength={140} 
                                onChangeText={value => { 
                                this.state.profile.to.zip = value; } }/>
                    <FormLabel>City</FormLabel>
                    <FormInput
                                ref='city'
                                type={'TextInput'}
                                keyboardType='ascii-capable'
                                style={Styles.textInput}
                                returnKeyType={"done"}
                                placeholderTextColor={Styles.brandColor}
                                selectionColor={Styles.brandColor}
                                placeholder={this.state.profile.to.city}
                                maxLength={25} 
                                onChangeText={value => { 
                                this.state.profile.to.zip = value; } }/>
                    <FormLabel>State</FormLabel>
                    <FormInput
                                    ref='state'
                                    type={'TextInput'}
                                    keyboardType='ascii-capable'
                                    style={Styles.textInput}
                                    returnKeyType={"done"}
                                    placeholderTextColor={Styles.brandColor}
                                    selectionColor={Styles.brandColor}
                                    placeholder={this.state.profile.to.state}
                                    maxLength={25} 
                                    onChangeText={value => { 
                                        this.state.profile.to.state = value; } }/>
                    <FormLabel>Zipcode Password</FormLabel>
                    <FormInput
                        type = { 'TextInput' }
                        keyboardType = 'numeric'
                        style = { Styles.textInput }
                        returnKeyType = 'go'
                        placeholderTextColor = { Styles.brandColor }
                        selectionColor = { Styles.brandColor }
                        maxLength = { 5 } />
                
                    <Button
                    buttonStyle={{ marginTop: 20 }}
                    backgroundColor="#744BAC"
                    title="NEXT"
                    onPress={() => {
                        google_api.geocode(this.state.profile.to.street, this.state.profile.to.city,
                                this.state.profile.to.state, this.state.profile.to.zip)
                                .then(googresponse => {
                                    console.log(googresponse);
                                    if (googresponse.status === 'OK') {
                                        api.updateJobs({'client_id': this.state.profile.user_id, 
                                                'job_id': this.state.job_id,
                                                'endLocation': {
                                                    'address': {
                                                        'street': this.state.profile.to.street,
                                                        'city': this.state.profile.to.city,
                                                        'state': this.state.profile.to.state,
                                                        'zip': this.state.profile.to.zip
                                                    },
                                                    'coordinates': {
                                                        'lat': googresponse.results[0].geometry.location.lat,
                                                        'long': googresponse.results[0].geometry.location.lng
                                                    }
                                                }
                                        }).then(response => { 
                                                console.log(response);
                                              if (response.msg === 'ok') { 
                                                navigate("Bedrooms", this.state)
                                              } else {
                                                Alert.alert('Database connection error.');
                                              }
                                        });
                                } else {
                                    Alert.alert('Invoid entry.')
                                }
                            })
                        }
                    }/>
                </Card>
            </ScrollView>
        );
    }
}

  