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

export default class Price extends React.Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = props.navigation.state.params;
    }

    onSubmit = (price) => {
        api.updateJobs({'client_id': this.state.profile.user_id, 
                        'job_id': this.state.job_id,
                        'price': this.state.profile.price,
                    }).then(response => { 
                            console.log(response);
                          if (response.msg === 'ok') { 
                                    navigate("Summary", this.state)
                                  } else {
                                    Alert.alert('Invalid address.');
                                  }
                        });

    }
    
    render() {
        const api = new ApiClient();
        const { navigate } = this.props.navigation;
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
                    placeholder={this.state.profile.price}
                    selectionColor = { Styles.brandColor }
                    onSubmitEditing = { this.onSubmit }
                    maxLength = { 3 } 
                    onChangeText={value => { 
                                        this.state.profile.price = value; } }/>
                    <Text style = {{ fontSize: 25, color: Styles.brandColor }}>Dollars</Text>
                </View>
                <Button
                        buttonStyle={{ marginTop: 20 }}
                        backgroundColor="#03A9F4"
                        title = "NEXT"
                        onPress = { () => {
                            api.updateJobs({'client_id': this.state.profile.user_id, 
                        'job_id': this.state.job_id,
                        'price': this.state.profile.price,
                    }).then(response => { 
                            console.log(response);
                          if (response.msg === 'ok') { 
                                    navigate("Summary", this.state)
                                  } else {
                                    Alert.alert('Invalid address.');
                                  }
                        });
                        } }
                    />
            </Card>
        );
    }
}