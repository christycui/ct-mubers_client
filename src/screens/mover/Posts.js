import React from "react"
import Styles from "../../resources/style"

import { 
    ButtonGroup, Button, 
    FormLabel, FormInput,
    Icon,  
    KeyboardAvoidingView,
    Text, TextInput, TouchableOpacity,
    View 
} from 'react-native';

import { Header } from 'react-native-elements';
import MapView from 'react-native-maps'; 

export default class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.navigate = this.props.navigation.navigate;
    }

    render() {
        let [lat, lng] = [40.755644, -73.956097];
        return(
            // TODO: Get this from the Device GPS
            // TODO: ADD AVAILABLE JOBS TO MORE LAT & LNG
            <View style={Styles.wrapper}>
            
            <MapView
              style={Styles.map}
              customMapStyle={require('../../resources/gmap_style.json')}
              region={{
                latitude: lat,
                longitude: lng,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}>
              <MapView.Circle center={{latitude: lat, longitude: lng}} radius={100} strokeWidth={10} strokeColor={'rgba(200, 200, 255, .4)'}/>
            </MapView>
            <Header
              backgroundColor={Styles.brandColor}
              centerComponent={<Text style={{color: 'white'}}>AVAILABLE JOBS</Text>}
              rightComponent={
                <Text style={{textDecorationLine: 'underline', color: 'white', fontWeight: 'bold'}}
                    onPress={() => { this.setState({screen: PROFILE}) }}> > PROFILE</Text>
              }/>
          </View>
        );
    }
}