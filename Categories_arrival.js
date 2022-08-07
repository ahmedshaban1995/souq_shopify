// import { faBold } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Text, SafeAreaView,ScrollView,View, Image,ImageBackground ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



const Categories_arrival = () => {
    return (
     <SafeAreaView>
            
            <View style={{marginVertical:25}}>
             <Text style={{fontSize:25}}>  <Icon name="arrow-left" size={20} color="black" /> New Arrivals</Text>
            </View>

            <ScrollView style={{bottom:5}} horizontal={true}>
            <TouchableOpacity  style={{borderRadius:10,marginHorizontal:15,padding:10, alignItems:"center",justifyContent:"center",backgroundColor:"#EEEEEE"}}>
                <Text style={{fontSize:23,color:"black",opacity:0.4}} >Clothes</Text>
             </TouchableOpacity >
            <TouchableOpacity   style={{borderRadius:10,marginHorizontal:15,padding:10, alignItems:"center",justifyContent:"center",backgroundColor:"#EEEEEE"}}>
                <Text style={{fontSize:25,color:"black",opacity:0.4}}>Fernetures</Text>
            </TouchableOpacity > 
            <TouchableOpacity  style={{borderRadius:10,marginHorizontal:15,padding:10, alignItems:"center",justifyContent:"center",backgroundColor:"#EEEEEE"}}>
                  <Text style={{fontSize:25,color:"black",opacity:0.4}}>Electronic Devices </Text>
            </TouchableOpacity >
            <TouchableOpacity style={{borderRadius:10,marginHorizontal:15,padding:10, alignItems:"center",justifyContent:"center",backgroundColor:"#EEEEEE"}}>
                  <Text style={{fontSize:25 ,color:"black",opacity:1}}>Appliances</Text>
             </TouchableOpacity>
            </ScrollView>
           <ScrollView Vertical={true}>
            <View style={{display:"flex",flexDirection:"row"}}> 
   
            <View style={{margin:10,padding:15,borderRadius:20,width:160,backgroundColor:"#EEEEEE"}}>
            <ImageBackground style={{height:150,width:130,borderRadius:20}}source={require('../assets/1.jpg')} >
            <Icon style={{marginRight:95,marginTop:10}} name="heart" size={20} color="white" />
            </ImageBackground>
            <View style={{marginVertical:10}}>
            <Text style={{fontSize:20}} >bolo teshirt </Text>
            <Text >$ 40.00 </Text>
            <TouchableOpacity style={{width:"90%",height:40,alignItems: "center",justifyContent: 'center' ,alignSelf:"center",top:10,borderRadius:9,backgroundColor:"#061733"}}>
            <Icon name="shopping-cart" size={30} color="white" />

            </TouchableOpacity>
            </View>
            </View>


            <View style={{margin:10,padding:15,borderRadius:20,width:160,backgroundColor:"#EEEEEE"}}>
            <ImageBackground style={{height:150,width:130,borderRadius:20}}source={require('../assets/2.jpg')} >
            <Icon style={{marginRight:95,marginTop:10}} name="heart" size={20} color="white" />
            </ImageBackground>
            <View style={{marginVertical:10}}>
            <Text style={{fontSize:20}} >bolo teshirt </Text>
            <Text >$ 40.00 </Text>
            <TouchableOpacity style={{width:"90%",height:40,alignItems: "center",justifyContent: 'center' ,alignSelf:"center",top:10,borderRadius:9,backgroundColor:"#061733"}}>
            <Icon  name="shopping-cart" size={30} color="white" />

            </TouchableOpacity>
            </View>
            </View>
            
    </View>
            <View style={{display:"flex",flexDirection:"row"}}> 
   
            <View style={{margin:10,padding:15,borderRadius:20,width:160,backgroundColor:"#EEEEEE"}}>
            <ImageBackground style={{height:150,width:130,borderRadius:20}}source={require('../assets/3.jpg')} >
            <Icon style={{marginRight:95,marginTop:10}} name="heart" size={20} color="white" />
            </ImageBackground>
            <View style={{marginVertical:10}}>
            <Text style={{fontSize:20}} >bolo teshirt </Text>
            <Text >$ 40.00 </Text>
            <TouchableOpacity style={{width:"90%",height:40,alignItems: "center",justifyContent: 'center' ,alignSelf:"center",top:10,borderRadius:9,backgroundColor:"#061733"}}>
            <Icon name="shopping-cart" size={30} color="white" />

            </TouchableOpacity>
            </View>
            </View>


            <View style={{margin:10,padding:15,borderRadius:20,width:160,backgroundColor:"#EEEEEE"}}>
            <ImageBackground style={{height:150,width:130,borderRadius:20}}source={require('../assets/4.jpg')} >
            <Icon style={{marginRight:95,marginTop:10}} name="heart" size={20} color="white" /> 
            </ImageBackground>
            <View style={{marginVertical:10}}>
            <Text style={{fontSize:20}} >bolo teshirt </Text>
            <Text >$ 40.00 </Text>
            <TouchableOpacity style={{width:"90%",height:40,alignItems: "center",justifyContent: 'center' ,alignSelf:"center",top:10,borderRadius:9,backgroundColor:"#061733"}}>
            <Icon name="shopping-cart" size={30} color="white" />

            </TouchableOpacity>
            </View>
            </View>
            
    </View>
            <View style={{display:"flex",flexDirection:"row"}}> 
   
            <View style={{margin:10,padding:15,borderRadius:20,width:160,backgroundColor:"#EEEEEE"}}>
            <ImageBackground style={{height:150,width:130,borderRadius:20}}source={require('../assets/5.jpg')} >
            <Icon style={{marginRight:95,marginTop:10}} name="heart" size={20} color="white" />
            </ImageBackground>
            <View style={{marginVertical:10}}>
            <Text style={{fontSize:20}} >bolo teshirt </Text>
            <Text >$ 40.00 </Text>
            <TouchableOpacity style={{width:"90%",height:40,alignItems: "center",justifyContent: 'center' ,alignSelf:"center",top:10,borderRadius:9,backgroundColor:"#061733"}}>
            <Icon name="shopping-cart" size={30} color="white" />

            </TouchableOpacity>
            </View>
            </View>


            <View style={{margin:10,padding:15,borderRadius:20,width:160,backgroundColor:"#EEEEEE"}}>
            <ImageBackground style={{height:150,width:130,borderRadius:20}}source={require('../assets/6.jpg')} >
            <Icon style={{marginRight:95,marginTop:10}} name="heart" size={20} color="white" />
            </ImageBackground>
            <View style={{marginVertical:10}}>
            <Text style={{fontSize:20}} >bolo teshirt </Text>
            <Text >$ 40.00 </Text>
            <TouchableOpacity style={{width:"90%",height:40,alignItems: "center",justifyContent: 'center' ,alignSelf:"center",top:10,borderRadius:9,backgroundColor:"#061733"}}>
            <Icon  name="shopping-cart" size={30} color="white" />

            </TouchableOpacity>
            </View>
            </View>
            
    </View>
            <View style={{display:"flex",flexDirection:"row"}}> 
   
            <View style={{margin:10,padding:15,borderRadius:20,width:160,backgroundColor:"#EEEEEE"}}>
            <ImageBackground style={{height:150,width:130,borderRadius:20}}source={require('../assets/7.jpg')} >
            <Icon style={{marginRight:95,marginTop:10}} name="heart" size={20} color="white" />
            </ImageBackground>
            <View style={{marginVertical:10}}>
            <Text style={{fontSize:20}} >bolo teshirt </Text>
            <Text >$ 40.00 </Text>
            <TouchableOpacity style={{width:"90%",height:40,alignItems: "center",justifyContent: 'center' ,alignSelf:"center",top:10,borderRadius:9,backgroundColor:"#061733"}}>
            <Icon name="shopping-cart" size={30} color="white" />

            </TouchableOpacity>
            </View>
            </View>


            <View style={{margin:10,padding:15,borderRadius:20,width:160,backgroundColor:"#EEEEEE"}}>
            <ImageBackground style={{height:150,width:130,borderRadius:20}}source={require('../assets/8.jpg')} >
            <Icon style={{marginRight:95,marginTop:10}} name="heart" size={20} color="white" />
            </ImageBackground>
            <View style={{marginVertical:10}}>
            <Text style={{fontSize:20}} >bolo teshirt </Text>
            <Text >$ 40.00 </Text>
            <TouchableOpacity style={{width:"90%",height:40,alignItems: "center",justifyContent: 'center' ,alignSelf:"center",top:10,borderRadius:9,backgroundColor:"#061733"}}>
            <Icon  name="shopping-cart" size={30} color="white" />

            </TouchableOpacity>
            </View>
            </View>
            
    </View>
            <View style={{display:"flex",flexDirection:"row"}}> 
   
            <View style={{margin:10,padding:15,borderRadius:20,width:160,backgroundColor:"#EEEEEE"}}>
            <ImageBackground style={{height:150,width:130,borderRadius:20}}source={require('../assets/1.jpg')} >
            <Icon style={{marginRight:95,marginTop:10}} name="heart" size={20} color="white" />
            </ImageBackground>
            <View style={{marginVertical:10}}>
            <Text style={{fontSize:20}} >bolo teshirt </Text>
            <Text >$ 40.00 </Text>
            <TouchableOpacity style={{width:"90%",height:40,alignItems: "center",justifyContent: 'center' ,alignSelf:"center",top:10,borderRadius:9,backgroundColor:"#061733"}}>
            <Icon  name="shopping-cart" size={30} color="white" />

            </TouchableOpacity>
            </View>
            </View>


            <View style={{margin:10,padding:15,borderRadius:20,width:160,backgroundColor:"#EEEEEE"}}>
            <ImageBackground style={{height:150,width:130,borderRadius:20}}source={require('../assets/6.jpg')} >
            <Icon style={{marginRight:95,marginTop:10}} name="heart" size={20} color="white" />
            </ImageBackground>
            <View style={{marginVertical:10}}>
            <Text style={{fontSize:20}} >bolo teshirt </Text>
            <Text >$ 40.00 </Text>
            <TouchableOpacity style={{width:"90%",height:40,alignItems: "center",justifyContent: 'center' ,alignSelf:"center",top:10,borderRadius:9,backgroundColor:"#061733"}}>
            <Icon  name="shopping-cart" size={30} color="white" />

            </TouchableOpacity>
            </View>
            </View>
            
    </View>
        <View style={{marginBottom:90}}></View>
        </ScrollView>

       

    </SafeAreaView> );
}
 
export default Categories_arrival;