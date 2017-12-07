import React from 'react';
import Styles from '../../resources/style'
import RestClient from 'react-native-rest-client';
import ApiClient from '../../api-client';
import { 
    Icon,  
    KeyboardAvoidingView,
    Text, TextInput, TouchableOpacity,
    View 
} from 'react-native';
import { Button, Card } from "react-native-elements";

export default class Bedrooms extends React.Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = props.navigation.state.params;
    }

    onSubmit = (bedrooms) => {
        // TODO: save to DB
        if (this.props.navigation.state.params.setProfile == true) {
            //this.setState({screen: PROFILE, setProfile: false})
            this.navigate("Description", this.props.navigation.state.params );
        } else {
            this.navigate("Description", this.props.navigation.state.params );
        }
    }
    
    render() {
        const api = new ApiClient();
        const { navigate } = this.props.navigation;
        return (
            <Card title="How many bedrooms do you currently have?">
                <View style = {{ flexDirection: 'row'}}>
                <TextInput
                    type = { 'TextInput' }
                    keyboardType = 'numeric'
                    style = { Styles.textInput }
                    returnKeyType = 'go'
                    autoFocus
                    placeholderTextColor = { Styles.brandColor }
                    placeholder={this.state.profile.bedrooms}
                    selectionColor = { Styles.brandColor }
                    onSubmitEditing = { this.onSubmit }
                    maxLength = { 1 } 
                    onChangeText={value => { 
                                        this.state.profile.bedrooms = value; } }/>
                <Text style = {{ fontSize: 25, color: Styles.brandColor }}>Rooms</Text>
                </View>
                <Button
                        buttonStyle={{ marginTop: 20 }}
                        backgroundColor="#03A9F4"
                        title = "NEXT"
                        onPress = { () => {
                            api.updateJobs({'client_id': this.state.profile.user_id, 
                                'job_id': this.state.job_id,
                                'num_beds': this.state.bedrooms
                            }).then(response => { 
                                    console.log(response);
                                  if (response.msg === 'ok') { 
                                    navigate("Description", this.state)
                                  } else {
                                    Alert.alert('Invalid entry.');
                                  }
                                });
                            } }
                    />
            </Card>
        );
    }
}