import React from "react";
import { Card, Button, FormLabel, FormInput, TextInput, View } from "react-native";
import { StackNavigator } from "react-navigation";

import Location from "./Location";
// import { onSignIn } from "../auth";

export const Mover = StackNavigator({
    Location: {
        screen: Location
    }
})


