import React, { useState, useEffect } from "react"; 
import { View, Text } from "react-native"

const SignUp = ({route,navigation}) => {
const [count, setCount] = useState(0)

useEffect(() => { 
// setInterval(() => {
// setCount(count + 1); 
//    }, 1000); 
// route.params.paramKey = 'ashish'
})

return( 
  <View 
style={{ 
flex: 1, 
alignItems:"center", 
justifyContent:"center"}}  >
	<Text style={{ fontSize: 50 }}>
  Values passed from First page: {route.params.paramKey}
</Text>
<Text style={{ fontSize: 50 }}>
   {route.params.ankit}
</Text>
  </View>
 );
}

export default SignUp;