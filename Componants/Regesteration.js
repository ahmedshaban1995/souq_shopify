import {React,useState} from "react";
import { SafeAreaView, StyleSheet, TextInput,Button,Text,View, ViewComponent,TouchableOpacity} from "react-native";

const Registration = (props) => {


  return (
    <SafeAreaView style={{ justifyContent: 'center',alignItems:"center"}}>
     <Text style={{ fontSize:25, fontWeight: "bold",textAlign:"center",marginBottom:20}}>Regesteration</Text>
      <TextInput
      
        style={styles.input}
        onChange={(e)=>props.setemail(e.target.value)}
        value={props.email}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChange={(e)=>props.setusername(e.target.value)}
        value={props.username}
        placeholder="Username"
        keyboardType="name-phone-pad"
      />
      <TextInput
        style={styles.input}
        onChange={(e)=>props.setpassword(e.target.value)}

        // onChangeText={onChangeNumber}
        secureTextEntry={true}
        placeholder="Password"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChange={props.setaddress}
        secureTextEntry={true}
        placeholder="Re-password"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        
        placeholder="Address"
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.Button}>
      <Text style={{ fontSize:18,textAlign:"center",color:"white",paddingTop:5}}>Sign Up</Text>
    </TouchableOpacity>
   
<View style={styles.Text}>
    <Text > Already have an acount ?</Text>
 <Text>sign in</Text>
</View>
    </SafeAreaView>
  );

};

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
    alignItems: 'center',
    marginTop:30,
    width:300,
  },
  Text:{

    flex:1,
    alignItems: 'center',
    marginTop:25,
    // justifyContent: 'center',
  }
});

export default  Registration;