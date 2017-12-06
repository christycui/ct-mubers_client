import React from 'react';
import Styles from '../../resources/style'

import { 
    KeyboardAvoidingView,
    Text, TextInput, TouchableOpacity,
    View 
} from 'react-native';
import { FormInput } from 'react-native-elements';
// import { onSignUp } from "../auth";

export default class Summary extends React.Component {
    constructor(props) {
        super(props)
        this.props = props;
        console.log(this.props)
        this.navigate = this.props.navigation.navigate;
    }

    onSubmit = (miles) => {
        // TODO: save to DB
        if (this.props.navigation.state.params.setProfile == true) {
            this.navigate("Profile", this.props.navigation.state.params)
        } else {
            this.navigate("Profile", this.props.navigation.state.params)
        }
    }

    render() {
        return (
            // TODO: get all params from state and display
            <View style={{paddingTop: 30, paddingRight: 20}}>
            </View>
        );
    }

}