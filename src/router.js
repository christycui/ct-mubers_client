// app/router.js

import { StackNavigator } from "react-navigation";

import Home from "./screens/Home";
import SignIn from "./screens/SignIn";
import PhoneNumber from "./screens/PhoneNumber";
import SignUp from "./screens/SignUp";

import MoverLocation from "./screens/mover/Location";
import SetMiles from "./screens/mover/SetMiles"
import AddDesc from "./screens/mover/AddDesc";
import Posts from "./screens/mover/Posts";

import From from "./screens/client/From";
import To from "./screens/client/To";
import Bedrooms from "./screens/client/Bedrooms";
import Description from "./screens/client/Description";
import Photos from "./screens/client/Photos";
import Price from "./screens/client/Price";
import Summary from "./screens/client/Summary";


export const Router = StackNavigator({
    Homepage: {
        screen: Home,
        navigationOptions: {
            title: "MUBER"
        }
    },
    PhoneNumber: {
        screen: PhoneNumber,
        navigationOptions: {
            title: "Your Info"
        }
    },
    Mover: { 
        screen: StackNavigator({
            Location: { screen: MoverLocation },
            SetMiles: { screen: SetMiles },
            AddDesc: { screen: AddDesc },
            Posts: { screen: Posts }
        }, {headerMode: 'none'})
    },
    Client: { 
        screen: StackNavigator({
            From: { screen: From },
            To: { screen: To },
            Bedrooms: { screen: Bedrooms },
            Description: { screen: Description },
            Photos: { screen: Photos },
            Price: { screen: Price },
            Summary: { screen: Summary}
        }, {headerMode: 'none'})
    }  
});