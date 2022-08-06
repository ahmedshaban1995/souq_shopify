import React from 'react';
import { Text,SafeAreaView, ImageBackground,TouchableOpacity } from 'react-native';

const Firstpage = () => {
    return ( 
    <SafeAreaView>
        <ImageBackground style={{width:"100%",height:"100%",alignItems: "center",justifyContent:"flex-end"}} source={require('../assets/firstpage.png')}>
        <TouchableOpacity style={{width:160,height:37,borderRadius:7,backgroundColor:"#685C8A",marginBottom:30}} >
      <Text style={{ fontSize:25,textAlign:"center",color:"black",paddingTop:5}}>Sign Up</Text>
    </TouchableOpacity>
        <TouchableOpacity style={{width:160,height:37,borderRadius:7,marginBottom:30,backgroundColor:"#FFD345"}} >
      <Text style={{ fontSize:25,textAlign:"center",color:"black",paddingTop:5}}>Login</Text>
    </TouchableOpacity>
        </ImageBackground>

    </SafeAreaView>
    );
}
 
export default Firstpage;