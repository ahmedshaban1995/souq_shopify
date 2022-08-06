import { faBold } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Text, SafeAreaView,ScrollView,View, Image,ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Categories_arrival = () => {
    return (
     <SafeAreaView>
            
            <View style={{ width:"100%",display:"flex",paddingVertical:20,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
             <Text style={{marginHorizontal:20,fontSize:15}}>Filters</Text>
             <Text style={{fontSize:25}}>  <Icon name="arrow-left" size={20} color="black" /> Categories</Text>
            </View>

            <ScrollView style={{marginBottom:20}} horizontal={true}>
            <View  style={{borderRadius:10,marginHorizontal:15,paddingHorizontal:10, alignItems:"center",backgroundColor:"yellow"}}>
                <Text style={{fontSize:25,color:"gray",marginBottom:15}} >NIKE <Image style={{width:50,height:50}} source={require('../assets/Nike.png')}></Image> </Text>
             </View>
            <View  style={{borderRadius:10,paddingHorizontal:10,backgroundColor:"#EEEEEE"}}>
                <Text style={{fontSize:25,color:"gray"}}>Adidas <Image style={{width:50,height:50}} source={require('../assets/adidas.png')}></Image></Text>
            </View> 
            <View  style={{borderRadius:10,marginHorizontal:15,paddingHorizontal:10, alignItems:"center",backgroundColor:"#EEEEEE"}}>
                  <Text style={{fontSize:25,color:"gray"}}>Zara <Image style={{width:50,height:50}} source={require('../assets/zara.png')}></Image></Text>
            </View>
            <View  style={{borderRadius:10,marginHorizontal:15,paddingHorizontal:10, alignItems:"center",backgroundColor:"#EEEEEE"}}>
                  <Text style={{fontSize:25 ,color:"gray"}}>H&M <Image style={{width:50,height:50}} source={require('../assets/hm_logo_icon_181277.png')}></Image></Text>
                  </View>
            <View  style={{borderRadius:10,marginHorizontal:15, alignItems:"center",backgroundColor:"#EEEEEE",opacity:0.5}}>
                  <Text style={{fontSize:25,color:"gray"}}>Rolex <Image style={{width:50,height:50}} source={require('../assets/rolex.png')}></Image></Text>
            </View>
            <View  style={{borderRadius:10,marginHorizontal:15,paddingHorizontal:10, alignItems:"center",backgroundColor:"#EEEEEE"}}>
                  <Text style={{fontSize:25,color:"gray"}}>Polo Ralph Lauren <Image style={{width:50,height:50}} source={require('../assets/polo.png')}></Image></Text>
            </View>
            <View  style={{borderRadius:10,marginHorizontal:15,paddingHorizontal:10, alignItems:"center",backgroundColor:"#EEEEEE"}}>
                   <Text style={{fontSize:25}}>American Eagle Outfitters <Image style={{width:50,height:50}} source={require('../assets/american-eagle-outfitters.png')}></Image></Text>
            </View>
            <View  style={{borderRadius:10,marginHorizontal:15,paddingHorizontal:10, alignItems:"center",backgroundColor:"#EEEEEE"}}>
                   <Text style={{fontSize:25}}>Puma <Image style={{width:50,height:50}} source={require('../assets/images.png')}></Image></Text>
            </View>
            <View  style={{borderRadius:10,marginHorizontal:15,paddingHorizontal:10, alignItems:"center",backgroundColor:"#EEEEEE"}}>
                  <Text style={{fontSize:25}}>Hugo Boss <Image style={{width:50,height:50}} source={require('../assets/boss-hugo-boss.png')}></Image></Text>
            </View>
            
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
            </View>
            </View>


            <View style={{margin:10,padding:15,borderRadius:20,width:160,backgroundColor:"#EEEEEE"}}>
            <ImageBackground style={{height:150,width:130,borderRadius:20}}source={require('../assets/2.jpg')} >
            <Icon style={{marginRight:95,marginTop:10}} name="heart" size={20} color="white" />
            </ImageBackground>
            <View style={{marginVertical:10}}>
            <Text style={{fontSize:20}} >bolo teshirt </Text>
            <Text >$ 40.00 </Text>
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
            </View>
            </View>


            <View style={{margin:10,padding:15,borderRadius:20,width:160,backgroundColor:"#EEEEEE"}}>
            <ImageBackground style={{height:150,width:130,borderRadius:20}}source={require('../assets/4.jpg')} >
            <Icon style={{marginRight:95,marginTop:10}} name="heart" size={20} color="white" /> 
            </ImageBackground>
            <View style={{marginVertical:10}}>
            <Text style={{fontSize:20}} >bolo teshirt </Text>
            <Text >$ 40.00 </Text>
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
            </View>
            </View>


            <View style={{margin:10,padding:15,borderRadius:20,width:160,backgroundColor:"#EEEEEE"}}>
            <ImageBackground style={{height:150,width:130,borderRadius:20}}source={require('../assets/6.jpg')} >
            <Icon style={{marginRight:95,marginTop:10}} name="heart" size={20} color="white" />
            </ImageBackground>
            <View style={{marginVertical:10}}>
            <Text style={{fontSize:20}} >bolo teshirt </Text>
            <Text >$ 40.00 </Text>
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
            </View>
            </View>


            <View style={{margin:10,padding:15,borderRadius:20,width:160,backgroundColor:"#EEEEEE"}}>
            <ImageBackground style={{height:150,width:130,borderRadius:20}}source={require('../assets/8.jpg')} >
            <Icon style={{marginRight:95,marginTop:10}} name="heart" size={20} color="white" />
            </ImageBackground>
            <View style={{marginVertical:10}}>
            <Text style={{fontSize:20}} >bolo teshirt </Text>
            <Text >$ 40.00 </Text>
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
            </View>
            </View>


            <View style={{margin:10,padding:15,borderRadius:20,width:160,backgroundColor:"#EEEEEE"}}>
            <ImageBackground style={{height:150,width:130,borderRadius:20}}source={require('../assets/6.jpg')} >
            <Icon style={{marginRight:95,marginTop:10}} name="heart" size={20} color="white" />
            </ImageBackground>
            <View style={{marginVertical:10}}>
            <Text style={{fontSize:20}} >bolo teshirt </Text>
            <Text >$ 40.00 </Text>
            </View>
            </View>
            
    </View>
        <View style={{marginBottom:90}}></View>
        </ScrollView>

       

    </SafeAreaView> );
}
 
export default Categories_arrival;