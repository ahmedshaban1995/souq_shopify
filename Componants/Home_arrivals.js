import React from 'react';
import ReactDOM from 'react-dom';
 import { Text, View,SafeAreaView,Image,ScrollView  ,ImageBackground} from 'react-native';
 import Icon from 'react-native-vector-icons/FontAwesome';



const Home_arrival = () => {
    return ( 
        <SafeAreaView style={{width:"100%"}}>
            <View style={{ width:"90%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                <Icon style={{margin:10}} name="caret-right" size={25} color="black" />
                <Text style={{marginRight:150}} >Show all</Text>
                <Text style={{fontSize:20}}>New Arrivals</Text>
            </View>
            <ScrollView style={{display:"flex",flexDirection:"row"}}  horizontal={true}>
                <View style={{margin:10,backgroundColor:"#EEEEEE",padding:10,borderRadius:20}}>
                <ImageBackground style={{height:100,width:100,borderRadius:20}}source={require('../assets/4.jpg')}  >
                <Icon style={{marginRight:70,marginTop:5}} name="heart" size={20} color="white" />
                {/* <Text>eeeeeeeeeeee</Text> */}
                 </ImageBackground>
                <Text>addidass shoese</Text>
                <Text>$ 29.00</Text>
                </View>
                <View style={{margin:10,backgroundColor:"#EEEEEE",padding:10,borderRadius:20}}>
                <ImageBackground style={{height:100,width:100,borderRadius:20}}source={require('../assets/5.jpg')}>
                <Icon style={{marginRight:70,marginTop:5}} name="heart" size={20} color="white" />
                {/* <Text>eeeeeeeeeeee</Text> */}
                 </ImageBackground>
                <Text>addidass shoese</Text>
                <Text>$ 29.00</Text>
                </View>
                <View style={{margin:10,backgroundColor:"#EEEEEE",padding:10,borderRadius:20}}>
                <ImageBackground style={{height:100,width:100,borderRadius:20}}source={require('../assets/6.jpg')}>
                <Icon style={{marginRight:70,marginTop:5}} name="heart" size={20} color="white" />
                {/* <Text>eeeeeeeeeeee</Text> */}
                 </ImageBackground>
                <Text>addidass shoese</Text>
                <Text>$ 29.00</Text>
                </View>
                <View style={{margin:10,backgroundColor:"#EEEEEE",padding:10,borderRadius:20}}>
                <ImageBackground style={{height:100,width:100,borderRadius:20}}source={require('../assets/7.jpg')}>
                <Icon style={{marginRight:70,marginTop:5}} name="heart" size={20} color="white" />
                {/* <Text>eeeeeeeeeeee</Text> */}
                 </ImageBackground>
                <Text>addidass shoese</Text>
                <Text>$ 29.00</Text>
                </View>
                <View style={{margin:10,backgroundColor:"#EEEEEE",padding:10,borderRadius:20}}>
                <ImageBackground style={{height:100,width:100,borderRadius:20}}source={require('../assets/8.jpg')}>
                <Icon style={{marginRight:70,marginTop:5}} name="heart" size={20} color="white" />
                {/* <Text>eeeeeeeeeeee</Text> */}
                 </ImageBackground>
                <Text>addidass shoese</Text>
                <Text>$ 29.00</Text>
                </View>
                <View style={{margin:10,backgroundColor:"#EEEEEE",padding:10,borderRadius:20}}>
                <ImageBackground style={{height:100,width:100,borderRadius:20}}source={require('../assets/3.jpg')}>
                <Icon style={{marginRight:70,marginTop:5}} name="heart" size={20} color="white" />
                {/* <Text>eeeeeeeeeeee</Text> */}
                 </ImageBackground>
                <Text>addidass shoese</Text>
                <Text>$ 29.00</Text>
                </View>
                <View style={{margin:10,backgroundColor:"#EEEEEE",padding:10,borderRadius:20}}>
                <ImageBackground style={{height:100,width:100,borderRadius:20}}source={require('../assets/2.jpg')}>
                <Icon style={{marginRight:70,marginTop:5}} name="heart" size={20} color="white" />
                {/* <Text>eeeeeeeeeeee</Text> */}
                 </ImageBackground>
                <Text>addidass shoese</Text>
                <Text>$ 29.00</Text>
                </View>
                <View style={{margin:10,backgroundColor:"#EEEEEE",padding:10,borderRadius:20}}>
                <ImageBackground style={{height:100,width:100,borderRadius:20}}source={require('../assets/1.jpg')}>
                <Icon style={{marginRight:70,marginTop:5}} name="heart" size={20} color="white" />
                {/* <Text>eeeeeeeeeeee</Text> */}
                 </ImageBackground>
                <Text>addidass shoese</Text>
                <Text>$ 29.00</Text>
                </View>
                <View style={{margin:10,backgroundColor:"#EEEEEE",padding:10,borderRadius:20}}>
                <ImageBackground style={{height:100,width:100,borderRadius:20}}source={require('../assets/7.jpg')}>
                <Icon style={{marginRight:70,marginTop:5}} name="heart" size={20} color="white" />
                {/* <Text>eeeeeeeeeeee</Text> */}
                 </ImageBackground>
                <Text>addidass shoese</Text>
                <Text>$ 29.00</Text>
                </View>
                <View style={{margin:10,backgroundColor:"#EEEEEE",padding:10,borderRadius:20}}>
                <ImageBackground style={{height:100,width:100,borderRadius:20}}source={require('../assets/5.jpg')}>
                <Icon style={{marginRight:70,marginTop:5}} name="heart" size={20} color="white" />
                {/* <Text>eeeeeeeeeeee</Text> */}
                 </ImageBackground>
                <Text>addidass shoese</Text>
                <Text>$ 29.00</Text>
                </View>
                <View style={{margin:10,backgroundColor:"#EEEEEE",padding:10,borderRadius:20}}>
                <ImageBackground style={{height:100,width:100,borderRadius:20}}source={require('../assets/4.jpg')}>
                <Icon style={{marginRight:70,marginTop:5}} name="heart" size={20} color="white" />
                {/* <Text>eeeeeeeeeeee</Text> */}
                 </ImageBackground>
                <Text>addidass shoese</Text>
                <Text>$ 29.00</Text>
                </View>
                <View style={{margin:10,backgroundColor:"#EEEEEE",padding:10,borderRadius:20}}>
                <ImageBackground style={{height:100,width:100,borderRadius:20}}source={require('../assets/6.jpg')}>
                <Icon style={{marginRight:70,marginTop:5}} name="heart" size={20} color="white" />
                {/* <Text>eeeeeeeeeeee</Text> */}
                 </ImageBackground>
                <Text>addidass shoese</Text>
                <Text>$ 29.00</Text>
                </View>
                <View style={{margin:10,backgroundColor:"#EEEEEE",padding:10,borderRadius:20}}>
                <ImageBackground style={{height:100,width:100,borderRadius:20}}source={require('../assets/3.jpg')}>
                <Icon style={{marginRight:70,marginTop:5}} name="heart" size={20} color="white" />
                {/* <Text>eeeeeeeeeeee</Text> */}
                 </ImageBackground>
                <Text>addidass shoese</Text>
                <Text>$ 29.00</Text>
                </View>
                <View style={{margin:10,backgroundColor:"#EEEEEE",padding:10,borderRadius:20}}>
                <ImageBackground style={{height:100,width:100,borderRadius:20}}source={require('../assets/1.jpg')}>
                <Icon style={{marginRight:70,marginTop:5}} name="heart" size={20} color="white" />
                {/* <Text>eeeeeeeeeeee</Text> */}
                 </ImageBackground>
                <Text>addidass shoese</Text>
                <Text>$ 29.00</Text>
                </View>
                <View style={{margin:10,backgroundColor:"#EEEEEE",padding:10,borderRadius:20}}>
                <ImageBackground style={{height:100,width:100,borderRadius:20}}source={require('../assets/2.jpg')}>
                <Icon style={{marginRight:70,marginTop:5}} name="heart" size={20} color="white" />
                {/* <Text>eeeeeeeeeeee</Text> */}
                 </ImageBackground>
                <Text>NIKE shoese</Text>
                <Text>$ 38.00</Text>
                </View>
                
            </ScrollView>

        </SafeAreaView>
        );
}
 
export default Home_arrival;