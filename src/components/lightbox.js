import React,{ Component } from 'react';
import {
View,
Text,
Image,
TouchableOpacity
} from 'react-native';

var Lightbox = require('react-native-lightbox');


const Box = () => {
    return(
        <View> 
            <Text>hi</Text> 
         <Lightbox underlayColor="white">
          <Image
            source={{ uri: 'http://hani2.fustech.net/offers/banner1.png' }}
            style={{height:150,width:200}}

          />

        </Lightbox>

        </View>
    );
}


export default Box;