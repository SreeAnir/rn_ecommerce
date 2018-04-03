import React,{Component} from 'react';
import {
View,
Text,
Image
} from 'react-native';


class Footer extends Component {
    render(){
        return(
            <View style={styles.mainContainer}>
                <View style={styles.titleContainer}>
                 <Text style={styles.subTitle}>Powered By Fusion Technologies</Text>
                 </View>
            </View>
        );
    }
}

const styles = {
    mainContainer:{
        flex:1,
        backgroundColor:'grey',
        justifyContent:'center',
        alignItems:'center'
    },
    titleContainer:{
        justifyContent:'center',
        flex:1
    },
    subTitle:{
        color:'#fff',
        fontWeight:'200'
    }
};

export {Footer};