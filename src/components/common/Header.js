import React, {Component} from 'react';
import {Text,View } from 'react-native';


const Header = (props) => {
  const { viewStyle,textStyle } = styles;

  return(
    <View style={viewStyle}>  
        <Text style={textStyle}>{props.headerText}</Text>
    </View>
 );
};


const styles = {
    viewStyle:{
        backgroundColor:'#EEEEEE',
        justifyContent:'center',
        alignItems:'center',
        height:60,
        paddingTop:15,
        // borderColor:'#29C9DC',
        // borderWidth:2,
        shadowColor:'#000',
        shadowOffset:{ width:0,height:2 },
        shadowOpacity:0.2,
        elevation:2,
        position:'relative'    
    },
    textStyle:{
        fontSize:20,
        color:'#616161'

    }

}


export { Header };