import { React, useState } from "react";
import { StatusBar } from "expo-status-bar";
import reactDom from "react-dom";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Forgetpassword from "./Componants/Forgetpassword";
import Login from "./Componants/Login";
import Registration from "./Componants/Regesteration";
import Home_header from "./Componants/Home_header";
import Home_arrival from "./Componants/Home_arrivals";
import Home_trends from "./Componants/Home_trends";
import Home_sellers from "./Componants/Home_sellers";
import  Categories_arrival from "./Componants/Categories_arrival";
import Firstpage from "./Componants/Firstpage";
import Categories_brandes from "./Componants/Categories_brandes";
import Categories_allproducts from "./Componants/Categories_allproducts";
import Shopping_cart from "./Componants/Shopping_cart";


export default function App() {
  const [email, setemail] = useState("Useless Text");
  const [username, setusername] = useState(null);
  const [password, setpassword] = useState(null);
  const [address, setadress] = useState(null);

  return (
    <ScrollView style={styles.container}>
       {/* <Firstpage /> */}
      {/* <Registration /> */}
        
      {/* <Login /> */}
      {/* <Forgetpassword /> */}
      
      {/* <Home_header />
      <Home_arrival />
      <Home_trends />
      <Home_sellers /> */}
      {/* < Categories_arrival /> */}
      {/* <Categories_brandes /> */}
      {/* <Categories_allproducts /> */}
      <Shopping_cart />
     
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexDirection:"column",
    // marginTop: 30,
    // flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: 'space-evenly',
  },
});
