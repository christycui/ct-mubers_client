import React from 'react';
import RestClient from 'react-native-rest-client';
import ApiClient from '../../api-client';
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
        this.state = props.navigation.state.params;
    }

    render() {
        const api = new ApiClient();
        const { navigate } = this.props.navigation;
        return (
            // TODO: get all params from state and display
            <View>
              <View style={{paddingTop: 30, paddingRight: 20}}>
                <Text style={{textDecorationLine: 'underline', textAlign: 'right', color: Styles.brandColor, fontWeight: 'bold'}}
                 onPress={() => { this.navigate("Profile", this.props) }}> > JOBS</Text>
              </View>
              <View style={Styles.contentItem}>
                <View>
                  <Text h4 style={{textAlign: 'center'}}>Summary</Text>
                </View>
              </View>
              
              <View>
                <View style={Styles.contentItem}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View>
                      <Text>Phone: {this.state.profile.phone}</Text>
                    </View>
                    <View style={Styles.textRight}>
                      <Text style={{textDecorationLine: 'underline'}} onPress={() => { this.navigate("PhoneNumber", this.state) }}>Edit</Text>
                    </View>
                  </View>
                </View>
                <View style={Styles.contentItem}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View>
                      <Text>Start Location: {this.state.profile.from.street}, {this.state.profile.from.city}, 
                      {this.state.profile.from.state}, {this.state.profile.from.zip}</Text>
                    </View>
                    <View style={Styles.textRight}>
                      <Text style={{textDecorationLine: 'underline'}} onPress={() => { this.navigate("From", this.state) }}>Edit</Text>
                    </View>
                  </View>
                </View>
                <View style={Styles.contentItem}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View>
                      <Text>End Location: {this.state.profile.to.street}, {this.state.profile.to.city}, 
                      {this.state.profile.to.state}, {this.state.profile.to.zip}</Text>
                    </View>
                    <View style={Styles.textRight}>
                      <Text style={{textDecorationLine: 'underline'}} onPress={() => { this.navigate("To", this.state) }}>Edit</Text>
                    </View>
                  </View>
                </View>
                <View style={Styles.contentItem}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View>
                      <Text>Bedrooms: {this.state.profile.bedrooms}</Text>
                    </View>
                    <View style={Styles.textRight}>
                      <Text style={{textDecorationLine: 'underline'}} onPress={() => { this.navigate("Bedrooms", this.state) }}>Edit</Text>
                    </View>
                  </View>
                </View>
                <View style={Styles.contentItem}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View>
                      <Text>Description: {this.state.profile.description}</Text>
                    </View>
                    <View style={Styles.textRight}>
                      <Text style={{textDecorationLine: 'underline'}} onPress={() => { this.navigate("Description", this.state) }}>Edit</Text>
                    </View>
                  </View>
                </View>
                <View style={Styles.contentItem}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View>
                      <Text>Price: {this.state.profile.price}</Text>
                    </View>
                    <View style={Styles.textRight}>
                      <Text style={{textDecorationLine: 'underline'}} onPress={() => { this.navigate("Price", this.state)}}>Edit</Text>
                    </View>
                  </View>
                </View>
                
              </View>
              
            </View>
        );
    }

}