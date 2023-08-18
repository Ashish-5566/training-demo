import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native"
import RouteNames from '../../Navigation/Routes';
import Textcomponent from "../../Components/Text";
import Buttoncomponent from "../../Components/buttoncomponent";
import styles from "./styles";
const Onboarding = ({ navigation }) => {
  const [count, setCount] = useState('hii')
  const [count2, setCount2] = useState(0)

 
  const handletextchange=(text)=>{
    setCount(text)
  }

  return (
<>
<Text>gfghfhgfhgfhgf</Text>
<Text>gfghfhgfhgfhgf</Text>
</>
  );
}

export default Onboarding;