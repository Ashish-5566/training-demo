import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native"
// import RouteNames from '../../Navigation/Routes';
const Textcomponent = (props) => {


    return (
        <View   >
            <Text style={props.style?props.style:{backgroundColor:'red',fontSize:15}}>
                {props.data}
            </Text>

        </View>
    );
}

export default Textcomponent;