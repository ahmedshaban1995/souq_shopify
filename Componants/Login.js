import React from 'react';
import ReactDOM from 'react-dom';
import { Text,View ,TextInput,SafeAreaView,StyleSheet,TouchableOpacity} from 'react-native';

const Login = () => {


    return (
        <SafeAreaView >
            <View style={{alignItems:"flex-end"}}>
            <Text style={{ fontSize:25, fontWeight: "bold",margin:30}}>Loge in</Text>
        </View>

        <View>
            <TextInput
      
      style={styles.input}
      placeholder="Email"
      keyboardType="email-address"
    />
     <TextInput
      
      style={styles.input}
      placeholder="Password"
      keyboardType="visible-password"
    />
        </View>
        <TouchableOpacity style={styles.Button}>
      <Text style={{ fontSize:18,textAlign:"center",color:"white",paddingTop:5}}>Loge In</Text>
    </TouchableOpacity>

         <View style={styles.Text}>
         <Text > Forgot your password ?</Text>
 
        </View>
        </SafeAreaView>
        
     );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    width:300,
    margin:25,
    borderWidth:1,
    padding: 10,
    borderWidth:0,
    borderBottomWidth:1,
  },
  Button:{
    backgroundColor:"black",
    height:40,
    borderRadius:10,
    // alignItems: 'center',
    marginTop:30,
    marginLeft:25,
    width:300,
  },
  Text:{

    flex:1,
    alignItems: 'center',
    marginTop:25,
    // justifyContent: 'center',
  }
  });
 
export default Login;