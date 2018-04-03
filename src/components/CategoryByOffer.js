import React,{Component} from 'react';
import {
Text,
View,
Image,
ScrollView,
TouchableOpacity
}from 'react-native';
import {Card,CardSection} from './common';
import HomePage from './HomePage';


class CategoryByOffer extends Component{
    renderItems(titleText){
         return(
            <View style={{flex:1,marginTop:15,padding:5}}>
                <View style={styles.firstContainerStyle}>
                    <Text style={styles.titleStyle}>{this.props.titleText}</Text>
                     <TouchableOpacity>
                        <Text style={styles.buttonStyle}>
                            More
                         </Text>  
                     </TouchableOpacity>
                    
                  </View>
             <ScrollView horizontal={true} style={styles.secondContainer}>
                <View style={styles.divStyle}>
                    <Image source={require('../../images/car.jpg')}
                    style={{height:150,width:150}} 
                    />
                    <Text style={styles.divTitle}>House Sale</Text>
                    <Text style={styles.priceStyle}>Rs.200,000</Text>

                </View>
         <View style={styles.divStyle}>
                    <Image source={require('../../images/car.jpg')}
                    style={{height:150,width:150}} 
                    />
                    <Text style={styles.divTitle}>House Sale</Text>
                    <Text style={styles.priceStyle}>Rs.200,000</Text>

                </View>
         <View style={styles.divStyle}>
                    <Image source={require('../../images/car.jpg')}
                    style={{height:150,width:150}} 
                    />
                    <Text style={styles.divTitle}>House Sale</Text>
                    <Text style={styles.priceStyle}>Rs.200,000</Text>

                </View>
         <View style={styles.divStyle}>
                    <Image source={require('../../images/car.jpg')}
                    style={{height:150,width:150}} 
                    />
                    <Text style={styles.divTitle}>House Sale</Text>
                    <Text style={styles.priceStyle}>Rs.200,000</Text>

                </View>
         <View style={styles.divStyle}>
                    <Image source={require('../../images/car.jpg')}
                    style={{height:150,width:150}} 
                    />
                    <Text style={styles.divTitle}>House Sale</Text>
                    <Text style={styles.priceStyle}>Rs.200,000</Text>

                </View>
         <View style={styles.divStyle}>
                    <Image source={require('../../images/car.jpg')}
                    style={{height:150,width:150}} 
                    />
                    <Text style={styles.divTitle}>House Sale</Text>
                    <Text style={styles.priceStyle}>Rs.200,000</Text>

                </View>
         <View style={styles.divStyle}>
                    <Image source={require('../../images/car.jpg')}
                    style={{height:150,width:150}} 
                    />
                    <Text style={styles.divTitle}>House Sale</Text>
                    <Text style={styles.priceStyle}>Rs.200,000</Text>

                </View>
       
        
              </ScrollView>

                   </View>
                 
        
           
        );
    }
    render(){
        return(
            <View>
               {this.renderItems()}

            </View>

        );
    }
}

const styles = {
    firstContainerStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
    divStyle:{
        alignItems:'center',marginRight:5,borderWidth:1,
        borderRadius:2,
        borderColor:'#ddd',
        elevation:1,
        padding:10
    },
    secondContainer:{
        flexDirection:'row',
        marginTop:20,
        paddingBottom:5
        
    },
    buttonStyle:{
        backgroundColor:'#0EB3C4',
        height:35,
        width:90,
        textAlign:'center',
        color:'#fff',
        fontSize:14,
        fontWeight:'600',
        paddingTop:7

    },
    titleStyle:{
        fontSize:20,
        fontWeight:'600',
        color:'#000',
        textAlign:'center',
        paddingTop:3
    },
    divTitle:{
        fontSize:15,
        fontWeight:'400',
        color:'#000'


    },
    priceStyle:{
        color:'#BAE232'
    }
};

export default CategoryByOffer;