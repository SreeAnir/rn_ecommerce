import React,{ Component } from 'react';
import {
View,
Text,
TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';


const showBrands = ({brands}) => {
    return(
        <TouchableOpacity onPress={() =>Actions.offer({
            brandID:brands.id
            })}>
              <View style={styles.mainContainer}>
                   <Text style={styles.textStyle}>{brands.title}</Text>
                   <Text style={styles.qtnStyle}>{brands.created}</Text>
                </View>
        </TouchableOpacity>
        

    );
}
const styles={
mainContainer:{
    borderWidth:1,
    borderColor:'#ECEBEB',
    // margin:5,
    height:70,
    padding:10,
    backgroundColor:'#fff'
},

textStyle:{
    fontSize:20,
    fontWeight:'400',
    color:'#474444'
},
qtnStyle:{
    fontSize:10
}

};


export  default showBrands;