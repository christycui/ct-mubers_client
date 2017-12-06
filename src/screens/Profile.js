import React from 'react';
import styles from '../resources/style'

import { 
    Icon,  
    KeyboardAvoidingView,
    Text, TextInput, TouchableOpacity,
    View 
} from 'react-native';
import { Button, Card } from "react-native-elements";

export default class Proflie extends React.Component {
    constructor(props) {
        super(props)
        this.props = props;
        console.log("THIS PROFILE");
        console.log(this.props);
        this.props.navigation.state.params.setProfile = true;
        this.navigate = this.props.navigation.navigate;
    }

    render() {
        return (
            <View>
              <View style={{paddingTop: 30, paddingRight: 20}}>
                <Text style={{textDecorationLine: 'underline', textAlign: 'right', color: styles.brandColor, fontWeight: 'bold'}}
                 onPress={() => { this.navigate("Posts", this.props) }}> > JOBS</Text>
              </View>
              <View style={styles.contentItem}>
                <View>
                  <Text h4 style={{textAlign: 'center'}}>My Profile</Text>
                </View>
              </View>
              
              <View>
                <View style={styles.contentItem}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View>
                      <Text>Phone: {this.props.navigation.state.params.profile.phone}</Text>
                    </View>
                    <View style={styles.textRight}>
                      <Text style={{textDecorationLine: 'underline'}} onPress={() => { this.navigate("PhoneNumber", this.props.navigation.state.params) }}>Edit</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.contentItem}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View>
                      <Text>Location: {this.props.navigation.state.params.profile.location}</Text>
                    </View>
                    <View style={styles.textRight}>
                      <Text style={{textDecorationLine: 'underline'}} onPress={() => { this.navigate("Location", this.props.navigation.state.params) }}>Edit</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.contentItem}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View>
                      <Text>Job Distance (miles): {this.props.navigation.state.params.profile.distance}</Text>
                    </View>
                    <View style={styles.textRight}>
                      <Text style={{textDecorationLine: 'underline'}} onPress={() => { this.navigate("SetMiles", this.props.navigation.state.params)}}>Edit</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.contentItem}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View>
                      <Text>Description: {this.props.navigation.state.params.profile.desc}</Text>
                    </View>
                    <View style={styles.textRight}>
                      <Text style={{textDecorationLine: 'underline'}} onPress={() => { this.navigate("AddDesc", this.props.navigation.state.params) }}>Edit</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.contentItem}>
                <Text h4 style={{padding: 30, textAlign: 'center'}}>Activities</Text>
              </View>
            </View>
        );
    }
}