import React from 'react';
import Styles from '../../resources/style'
import RestClient from 'react-native-rest-client';
import ApiClient from '../../api-client';
import { 
    KeyboardAvoidingView,
    Text, TextInput, TouchableOpacity,
    View 
} from 'react-native';
import { FormInput } from 'react-native-elements';
// import { onSignUp } from "../auth";

export default class Description extends React.Component {
    constructor(props) {
        super(props)
        this.props = props;
        console.log(this.props)
        this.state = props.navigation.state.params;
    }

    onSubmit = (miles) => {
        api.updateJobs({'client_id': this.state.profile.user_id, 
                        'job_id': this.state.job_id,
                        'description': this.state.profile.description,
                    }).then(response => { 
                            console.log(response);
                          if (response.msg === 'ok') { 
                                    navigate("Price", this.state)
                                  } else {
                                    Alert.alert('Invalid address.');
                                  }
                        });

    }

    render() {
        const api = new ApiClient();
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView behavior={'padding'} style={[Styles.container, {backgroundColor: 'white', padding: 40}]}>
            <View style={{paddingTop: 30, paddingRight: 20}}>
                <Text style={{textDecorationLine: 'underline', textAlign: 'right', color: Styles.brandColor, fontWeight: 'bold', marginBottom: 20 }}
                onPress={() => this.navigate("Posts", this.props) }> > SKIP</Text>
            </View>
            <View style={{ flexDirection: 'row'}}>
                <FormInput
                type={'TextInput'}
                keyboardType='ascii-capable'
                style={Styles.textInput}
                returnKeyType='go'
                autoFocus
                placeholderTextColor={Styles.brandColor}
                placeholder={this.state.profile.description}
                selectionColor={Styles.brandColor}
                multiline={true}
                maxLength={300}
                placeholder="Brief description/instructions" 
                onChangeText={value => { 
                                        this.state.profile.description = value; } }/>
            </View>
            <TouchableOpacity style={Styles.button} onPress={() => {
                api.updateJobs({'client_id': this.state.profile.user_id, 
                        'job_id': this.state.job_id,
                        'description': this.state.profile.description,
                    }).then(response => { 
                            console.log(response);
                          if (response.msg === 'ok') { 
                                    navigate("Price", this.state)
                                  } else {
                                    Alert.alert('Invalid address.');
                                  }
                        });
            }}>
                <Text style={Styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }

}