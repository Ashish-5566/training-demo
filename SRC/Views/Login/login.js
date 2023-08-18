import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native"
import RouteNames from '../../Navigation/Routes';
import Textcomponent from "../../Components/Text";
const Login = ({ navigation }) => {
  const [count, setCount] = useState('hii')
  const [count2, setCount2] = useState(0)

  // useEffect(() => { 
  // setInterval(() => {
  // setCount(count +1); 
  //    }, 2000); 
  // })
  const handletextchange=(text)=>{
    setCount(text)
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}  >

      <Textcomponent data={'Text component is working ' + count} 
      style={{ alignItems: "center", justifyContent: "center", backgroundColor: 'green' }} />

      <TouchableOpacity onPress={() => { navigation.navigate(RouteNames.signup, { paramKey: count,ankit:0 }) }}>
        <View style={{ height: 50, width: 200, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#fff', fontSize: 15 }}>{'Carry props data '} </Text>
        </View>
      </TouchableOpacity>

      <TextInput
        value={count}
        onChangeText={ handletextchange }
        // onChangeText={(text) => { setCount(text) }}
        placeholder="Enter new thing"
        style={{ borderWidth: 1, marginTop: 10, width: 300 }}
      />

      {/* <TouchableOpacity onPress={()=>{setCount('hello')}}>
      
        <View style={{height:50,width:200,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:'#fff',fontSize:15}}>{'Set new data ' } </Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
}

export default Login;