import React,{ Component } from 'react';
import {
View,
Text,
Image,
TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';


const showOffers = ({offers}) => {
    return(
        <TouchableOpacity onPress={() =>Actions.offerDetail({
                image:offers.image,
                title:offers.title,
                discount:offers.discount,
                time:offers.timepicker,
                date:offers.created,
                tag:offers.tag,
                rnr:offers.rnr
            })}>
             <View style={styles.mainContainer}>
             <View>
                 <Image 
                 source={{uri :'http://hani2.fustech.net/offers/'+offers.image}}
                 style={{height:150,width:150}}
                 />
             </View>

             <View style={styles.secondContainer}>
                 <Text style={styles.titleStyle}>{offers.title}</Text>
                 <Text style={styles.priceStyle}>Upto {offers.discount} off</Text>
                 <Text style={styles.timeStyle}>{offers.timepicker} in Karachi</Text>
                  <Image source={require('../../images/verify.png')} 
                     style={{height:50,width:50}}
                     /> 
             </View>
        </View>
        </TouchableOpacity>
       
    );
}

const styles = {
mainContainer:{
    // flex:1,
    flexDirection:'row',
    justifyContent:'flex-start',
    margin:5,
    backgroundColor:'#FFFBFB'
},
secondContainer:{
    justifyContent:'space-around',
    marginLeft:10,
    flex:1,
    paddingTop:20
},

titleStyle:{
    fontSize:20,
    fontWeight:'600'
},

priceStyle:{
    color:'#BAE232'
}
};


export default showOffers;