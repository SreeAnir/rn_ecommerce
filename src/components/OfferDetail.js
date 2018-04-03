import React,{ Component} from 'react';
import{
View,
Text,
Image,
ScrollView,
TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Lightbox from 'react-native-lightbox';
import {Actions} from 'react-native-router-flux';

class OfferDetail extends Component {
    render(){
        return(
            <ScrollView style={{flex:1,marginTop:50}}>
                <View>
                   <Lightbox>
                    <Image source={{uri:'http://hani2.fustech.net/offers/'+this.props.image}}
                    style={{height:250,width:400}}
                    resize={"contain"}
                    />   
                    </Lightbox> 
                </View>

                <View style={styles.contentContainer}>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity>
                           <Text style={styles.btnStyle}>
                               <Icon name="phone" size={25} color='#fff'/>
                               CALL
                               </Text> 
                       </TouchableOpacity>
                        <TouchableOpacity onPress={Actions.cam}>
                           <Text style={styles.btnStyle}>
                            <Icon name="camera" size={25} color='#fff'/>
                                Invoice
                                </Text> 
                        </TouchableOpacity>  
                         
                    </View>
                     <View style={styles.titlePriceContainer}>
                 <Text style={styles.titleStyle}>{this.props.title}</Text>
                 <Text style={styles.priceStyle}>Upto {this.props.discount} off</Text>
                 <Text>{this.props.time}, {this.props.date}</Text>
             </View>
             <View style={styles.descriptionContainer}>
             <Text>{this.props.rnr} </Text>
             </View>
             <View style={styles.sellerContainer}>
                 <Image source={require('../../images/avator.png')} 
                 style={{height:50,width:50,borderRadius:50}}
                 />
                 <Text style={styles.sellerTitle}>{this.props.title}</Text>
               <Image source={require('../../images/verify.png')} 
                 style={{height:50,width:50}}
                 />
             </View>
                </View>
            </ScrollView>
        );
    }
}
const styles={
    contentContainer:{
        backgroundColor:'#FAF9F8'
    },
    btnContainer:{
        flexDirection:'row',
        justifyContent:'space-around' ,
        marginTop:5       
    },

    btnStyle:{
        backgroundColor:'#F58216',
        height:50,
        width:170,
        textAlign:'center',
        fontSize:18,
        fontWeight:'600',
        color:'#fff',
       paddingTop:10
    },

    titlePriceContainer:{
        justifyContent:'space-around',
        backgroundColor:'#fff',
        margin:5,
        paddingLeft:10,
        height:100
    },
    titleStyle:{
    fontSize:22,
    fontWeight:'600',
    color:'#000'
},

    priceStyle:{
    fontSize:20,
    color:'#BAE232',
    fontWeight:'600'
},
    descriptionContainer:{
        backgroundColor:'#fff',
        margin:5,
        padding:10
},

sellerContainer:{
        backgroundColor:'#fff',
        margin:5,
        padding:10,
        flexDirection:'row',
        justifyContent:'space-around',
        height:100
},
sellerTitle:{
    fontSize:22,
    fontWeight:'500',
    marginRight:90,
    marginLeft:20,
    marginTop:5,
    color:'#000'
}
};

export default OfferDetail;