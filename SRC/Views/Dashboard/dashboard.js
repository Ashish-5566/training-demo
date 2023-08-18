import React, { useState, useEffect } from "react"; 
import { View, Text } from "react-native"

const Dashboard = (props) => {
const [count, setCount] = useState(0)

useEffect(() => { 
setInterval(() => {
setCount(count + 1); 
   }, 1000); 
})

return( 
  <View 
style={{ 
flex: 1, 
alignItems:"center", 
justifyContent:"center"}}  >
	<Text style={{ fontSize: 50 }}>
Count is incremented {count} times
</Text>
  </View>
 );
}

export default Dashboard;