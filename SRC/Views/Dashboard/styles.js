import * as React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import { Text, View, StyleSheet, Image, KeyboardAvoidingView, Dimensions } from 'react-native';
 
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
 
const screenWidth = Dimensions.get('window').width;
const styles = ScaledSheet.create({
    backgroundImage:{
        height:'100%',
        width:'100%',
        flex:1,
        // paddingTop:hp('26%'),
    },
     
   

     
});

export default styles;