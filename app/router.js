// app/router.js

import { StackNavigator } from "react-navigation";

import Home from "./screens/Home";
import SignIn from "./screens/SignIn";
import PhoneNumber from "./screens/PhoneNumber";
import Location from "./screens/mover/Location";
import SignUp from "./screens/SignUp";

export const Router = StackNavigator({
    Homepage: {
        screen: Home,
        navigationOptions: {
            title: "MUBER"
        }
    },
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            title: "Sign In"
        }
    },
    PhoneNumber: {
        screen: PhoneNumber,
        navigationOptions: {
            title: "Your Info"
        }
    },
    SignUp: { 
        screen: SignUp
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