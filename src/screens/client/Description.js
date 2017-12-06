import React from 'react';
import Styles from '../../resources/style'

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
        this.navigate = this.props.navigation.navigate;
    }

    onSubmit = (miles) => {
        // TODO: save to DB
        if (this.props.navigation.state.params.setProfile == true) {
            this.navigate("Photos", this.props.navigation.state.params)
        } else {
            this.navigate("Photos", this.props.navigation.state.params)
        }
    }

    render() {
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
                selectionColor={Styles.brandColor}
                multiline={true}
                maxLength={300}
                placeholder="Brief description/instructions" />
            </View>
            <TouchableOpacity style={Styles.button} onPress={this.onSubmit}>
                <Text style={Styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }

}