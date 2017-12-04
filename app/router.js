// app/router.js

import { StackNavigator } from "react-navigation";

import Home from "./screens/Home";
import SignIn from "./screens/SignIn";
import PhoneNumber from "./screens/PhoneNumber";
import SignUp from "./screens/SignUp";

import Location from "./screens/mover/Location";
import SetMiles from "./screens/mover/SetMiles"
import AddDesc from "./screens/mover/AddDesc";
import Posts from "./screens/mover/Posts";


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
            Location: { screen: Location },
            SetMiles: { screen: SetMiles },
            AddDesc: { screen: AddDesc },
            Posts: { screen: Posts }
        }, {headerMode: 'none'})
    } 
});

// const SignUp = StackNavigator({
//     Mover: {
//         screen: StackNavigator({
//             Location: {
//                 screen: Location
//             },
//             Miles: {
//                 screen: SetMiles
//             },
//             Description: {
//                 screen: Description
//             },
//             Posts: {
//                 screen: Posts
//             }
//         })
//     },
//     Client: {
//         screen: StackNavigator({})
//     }
// });

// const Mover = StackNavigator({
//     Location: {
//         screen: Location
//     },
//     Miles: {
//         screen: SetMiles
//     },
//     Description: {
//         screen: Description
//     },
//     Posts: {
//         screen: Posts
//     }
// });

// const Client = StackNavigator({

// });