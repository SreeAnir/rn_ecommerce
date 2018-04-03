import React,{Component} from 'react';
import {
View,
Text,
Image
} from 'react-native';


class Splash extends Component {
    render(){
        return(
            <View style={styles.mainContainer}>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>Hani</Text>
                  <Image  
                  style={styles.imageStyle}
                  source={require('../../images/splash.png')}
                  />
                </View>
                 <Text style={styles.subTitle}>Powered By Fusion Technologies</Text>

            </View>
        );
    }
}

const styles = {
    mainContainer:{
        flex:1,
        backgroundColor:'#1abc9c',
        justifyContent:'center',
        alignItems:'center'
    },
    imageStyle:{
        height:200,
        width:200

    },
    titleContainer:{
        justifyContent:'center',
        flex:1
    },
    title:{
        color:'#8e44ad',
        fontSize:36,
        fontWeight:'bold'

    },
    subTitle:{
        color:'#fff',
        fontWeight:'200'
    }
};

export default Splash;