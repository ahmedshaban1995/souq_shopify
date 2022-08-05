import React from 'react';
import ReactDOM from 'react-dom';
import { Text,SafeAreaView ,View, Image,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Home_header = () => {
    return ( 
    <SafeAreaView>
        <ScrollView >
            <Image style={{height:400,width:360, opacity: 0.6}}source={require('../assets/4.jpg')}>

            </Image>
            <View  style={{position:"absolute" }}>
<View style={{display:"flex", flexDirection:"row",justifyContent:"space-between"}}>
 
        <Icon style={{margin:20}} name="shopping-bag" size={25} color="white" />
        <Icon style={{marginRight:150,marginTop:20}} name="search" size={25} color="white"  />
        <Icon style={{marginLeft:70,marginTop:20}} name="bars" size={25} color="white" />
        </View>
        <View style={{marginTop:150}}>
            <Text style={{fontSize:35,color:"white",marginLeft:40}}>make yourself at home</Text>
            <Text  style={{fontSize:15,color:"white",marginLeft:30,marginTop:10}}>we love new fasion and modern perfect design and more galarys for You </Text>
        </View>
   
            </View>
        
        
            
        
          
        

            
         </ScrollView>

    </SafeAreaView> );
}
 
export default Home_header;