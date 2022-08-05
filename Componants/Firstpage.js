import React from 'react';
import { Text,SafeAreaView, ImageBackground } from 'react-native';

const Firstpage = () => {
    return ( 
    <SafeAreaView>
        <ImageBackground style={{width:300,height:800}} source={require('../assets/firstpage.png')}>
            <Text>yyyyyyyyy</Text>
        </ImageBackground>

    </SafeAreaView>
    );
}
 
export default Firstpage;