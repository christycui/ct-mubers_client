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

export default class From extends React.Component {
    
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
            this.props.navigation.navigate("Profile", this.props.navigation.state.params)
        } else {
            // this.setState({screen: SET_MILES})
            this.props.navigation.navigate("To", this.props.navigation.state.params)
        }
    }
    render() {
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
                                    placeholder={this.props.navigation.state.params.profile.location}
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
                                    placeholder={this.props.navigation.state.params.profile.location}
                                    maxLength={25} />
                        <FormLabel>State</FormLabel>
                        <Picker>
                            <Picker.Item label="Alabama" value="alabama" />
                                <Picker.Item label="Alaska" value="alaska" />
                                <Picker.Item label="Arizona" value="arizona" />
                                <Picker.Item label="Arkansas" value="arkansas" />
                                <Picker.Item label="California" value="california" />
                                <Picker.Item label="Colorado" value="colorado" />
                                <Picker.Item label="Connecticut" value="conneticut" />
                                <Picker.Item label="Delaware" value="delaware" />
                                <Picker.Item label="Florida" value="florida" />
                                <Picker.Item label="Georgia" value="georgia" />
                                <Picker.Item label="Hawaii" value="hawaii" />
                                <Picker.Item label="Idaho" value="idaho" />
                                <Picker.Item label="Illinois" value="illinois" />
                                <Picker.Item label="Indiana" value="indiana" />
                                <Picker.Item label="Iowa" value="iowa" />
                                <Picker.Item label="Kansas" value="kansas" />
                                <Picker.Item label="Kentucky" value="kentucky" />
                                <Picker.Item label="Louisiana" value="lousiana" />
                                <Picker.Item label="Maine" value="maine" />
                                <Picker.Item label="Maryland" value="maryland" />
                                <Picker.Item label="Massachusetts" value="massachusetts" />
                                <Picker.Item label="Michigan" value="michgan" />
                                <Picker.Item label="Minnesota" value="minnesota" />
                                <Picker.Item label="Mississippi" value="mississippi" />
                                <Picker.Item label="Missouri" value="missouri" />
                                <Picker.Item label="Montana" value="montana" />
                                <Picker.Item label="Nebraska" value="nebraska" />
                                <Picker.Item label="Nevada" value="nevada" />
                                <Picker.Item label="New Hampshire" value="new hampshire" />
                                <Picker.Item label="New Jersey" value="new jersey" />
                                <Picker.Item label="New Mexico" value="new mexico" />
                                <Picker.Item label="New York" value="new york" />
                                <Picker.Item label="North Carolina" value="north carolina" />
                                <Picker.Item label="North Dakota" value="north dakota" />
                                <Picker.Item label="Ohio" value="ohio" />
                                <Picker.Item label="Oklahoma" value="oklahoma" />
                                <Picker.Item label="Oregon" value="oregon" />
                                <Picker.Item label="Pennsylvania" value="pennsylvania" />
                                <Picker.Item label="Rhode Island" value="rhode island" />
                                <Picker.Item label="South Carolina" value="south carolina" />
                                <Picker.Item label="South Dakota" value="south dakota" />
                                <Picker.Item label="Tennessee" value="tennessee" />
                                <Picker.Item label="Texas" value="texas" />
                                <Picker.Item label="Utah" value="utah" />
                                <Picker.Item label="Vermont" value="vermont" />
                                <Picker.Item label="Virginia" value="virginia" />
                                <Picker.Item label="Washington" value="washington" />
                                <Picker.Item label="West Virginia" value="west virginia" />
                                <Picker.Item label="Wisconsin" value="wisconsin" />
                                <Picker.Item label="Wyoming" value="wyoming" />
                            </Picker>
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
                        onPress={() =>
                            this.onSubmit()
                        }
                        />
                    </Card>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

  