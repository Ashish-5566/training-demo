import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native"
// import RouteNames from '../../Navigation/Routes';
const Buttoncomponent = (props) => {


    return (
        <View style={props.style?props.style:{backgroundColor:'red'}}  >
            <TouchableOpacity onPress={props.pressfunction}>
                <Text>{props.data}</Text>
            </TouchableOpacity>

        </View>
    );
}

export default Buttoncomponent;