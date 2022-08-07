import React from 'react';
import { ImageBackground, ScrollView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Shopping_cart = () => {
    return ( 
 <ScrollView>
    <View>
     <View style={{marginHorizontal:10,marginTop:40,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
     <Text style={{fontSize:19,color:"#2E78F6"}}>Edit</Text>
      <Icon name="close" size={30} color="black" />
     </View>
     <Text style={{fontSize:30,margin:20}}>Shopping cart </Text>
     </View>
    <View style={{ backgroundColor:"black", height:1,margin:20}}></View>

     <View style={{width:100,height:40,borderRadius:10,justifyContent:"center",alignItems:"center",margin:10,backgroundColor:"black",left:230,}}>
        <Text style={{fontSize:20,color:"white"}}>3 Items</Text>
     </View>

     <View>
        <View>
            <ImageBackground style={{height:50,width:30,borderRadius:20}} source={require('../assets/1.jpg')}></ImageBackground>
        </View>
        <View>

        </View>
     </View>

 </ScrollView>
  
    );
}
 
export default Shopping_cart;