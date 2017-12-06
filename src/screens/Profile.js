import React from 'react';
import styles from '../resources/style'

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
        this.props.navigation.state.params.setProfile = true;
        this.navigate = this.props.navigation.navigate;
    }

    render() {
        return (
            <View>
              <View style={{paddingTop: 30, paddingRight: 20}}>
                <Text style={{textDecorationLine: 'underline', textAlign: 'right', color: styles.brandColor, fontWeight: 'bold'}}
                 onPress={() => { this.setState({screen: POSTS}) }}> > JOBS</Text>
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
                      <Text>Email: {this.props.navigation.state.params.profile.email}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.contentItem}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View>
                      <Text>Phone: {this.state.profile.phone}</Text>
                    </View>
                    <View style={styles.textRight}>
                      <Text style={{textDecorationLine: 'underline'}} onPress={() => { this.navigate("PhoneNumber", this.props) }}>Edit</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.contentItem}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View>
                      <Text>Location: {this.state.profile.location}</Text>
                    </View>
                    <View style={styles.textRight}>
                      <Text style={{textDecorationLine: 'underline'}} onPress={() => { this.navigate("Location", this.props) }}>Edit</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.contentItem}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View>
                      <Text>Job Distance (miles): {this.state.profile.distance}</Text>
                    </View>
                    <View style={styles.textRight}>
                      <Text style={{textDecorationLine: 'underline'}} onPress={() => { this.navigate("SetMiles", this.props)}}>Edit</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.contentItem}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View>
                      <Text>Description: {this.state.profile.desc}</Text>
                    </View>
                    <View style={styles.textRight}>
                      <Text style={{textDecorationLine: 'underline'}} onPress={() => { this.navigate("AddDesc", this.props) }}>Edit</Text>
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