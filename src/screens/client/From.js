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
    ScrollView, Alert
} from 'react-native';
import { Button, Card, FormInput, FormLabel } from 'react-native-elements';
// import { onSignUp } from "../auth";

export default class From extends React.Component {
    
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
            this.props.navigation.navigate("To", this.props.navigation.state.params)
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        const api = new ApiClient();
        const google_api = new GoogleClient();
        return (
            <KeyboardAvoidingView>
                <ScrollView>
                    <Card title = "From...">
                        <FormLabel>Street</FormLabel>
                        <FormInput
                                    type={'TextInput'}
                                    keyboardType='ascii-capable'
                                    style={Styles.textInput}
                                    returnKeyType={"next"}
                                    autoFocus
                                    placeholderTextColor={Styles.brandColor}
                                    selectionColor={Styles.brandColor}
                                    placeholder={this.state.profile.from.street}
                                    onSubmitEditing={(event) => { 
                                        this.refs.city.focus(); 
                                    }}
                                    maxLength={140} 
                                    onChangeText={value => { 
                                        this.state.profile.from.street = value; } }/>
                        <FormLabel>City</FormLabel>
                        <FormInput
                                    ref='city'
                                    type={'TextInput'}
                                    keyboardType='ascii-capable'
                                    style={Styles.textInput}
                                    returnKeyType={"done"}
                                    placeholderTextColor={Styles.brandColor}
                                    selectionColor={Styles.brandColor}
                                    placeholder={this.state.profile.city}
                                    maxLength={25} 
                                    onChangeText={value => { 
                                        this.state.profile.from.city = value; } }/>
                        <FormLabel>State</FormLabel>
                        <FormInput
                                    ref='state'
                                    type={'TextInput'}
                                    keyboardType='ascii-capable'
                                    style={Styles.textInput}
                                    returnKeyType={"done"}
                                    placeholderTextColor={Styles.brandColor}
                                    selectionColor={Styles.brandColor}
                                    placeholder={this.state.profile.from.state}
                                    maxLength={25} 
                                    onChangeText={value => { 
                                        this.state.profile.from.state = value; } }/>
                        <FormLabel>Zipcode Password</FormLabel>
                        <FormInput
                            type = { 'TextInput' }
                            keyboardType = 'numeric'
                            style = { Styles.textInput }
                            returnKeyType = 'go'
                            placeholderTextColor = { Styles.brandColor }
                            selectionColor = { Styles.brandColor }
                            placeholder={this.state.profile.from.zip}
                            maxLength = { 5 } 
                            onChangeText={value => { 
                                this.state.profile.from.zip = value; } }/>
                    
                        <Button
                        buttonStyle={{ marginTop: 20 }}
                        backgroundColor="#744BAC"
                        title="NEXT"
                        onPress={() => {
                            google_api.geocode(this.state.profile.from.street, this.state.profile.from.city,
                                this.state.profile.from.state, this.state.profile.from.zip)
                                .then(googresponse => {
                                    console.log(googresponse);
                                if (googresponse.status === 'OK') {

                                    console.log("RESPONSE!!!!!!!!!!!!!!!!\n\n")
                                    console.log(googresponse.results[0].geometry)

                                    
                                    let latitude = googresponse.results[0].geometry.location.lat
                                    let lng = googresponse.results[0].geometry.location.lng


                                    api.createJobs({'client_id': this.state.profile.user_id, 
                                    'start_location': {
                                        'address': {
                                            'street': this.state.profile.from.street,
                                            'city': this.state.profile.from.city,
                                            'state': this.state.profile.from.state,
                                            'zip': this.state.profile.from.zip
                                        },
                                        'coordinates': {
                                            'lat': latitude,
                                            'long': lng
                                        }
                                    }
                                }).then(response => { 
                                        console.log(response);
                                      if (response.job_id) { 
                                        this.state.job_id = response.job_id;
                                        navigate("To", this.state);
                                      } else {
                                        Alert.alert('Database connection error.');
                                      }
                                    });
                                } else {
                                    Alert.alert('Invalid Entry.')
                                }
                            })
                            
                            }
                        }/>
                    </Card>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

  