import React,{Component} from 'react';
import {
View,
Text,
Image,
KeyboardAvoidingView
} from 'react-native';
import LoginForm from './LoginForm';



class Login extends Component {
    render(){
        return(
            <View style={styles.mainContainer}>
                <View style={styles.logoContainer}>
                    <Image 
                    style={styles.logoStyle}
                    source={require('../../images/logo.png')}
                    />
                    <Text style={styles.title}>An App Made For Hani Using React Native</Text>
                </View>
                <View styles={styles.formStyle}>
                    <LoginForm />
                </View>
            </View>
        );
    }
}

const styles={
    mainContainer:{
        flex:1,
        backgroundColor:'#3498db'
    },
    logoContainer:{
        alignItems:'center',
        justifyContent:'center',
        flexGrow:1
    },
    logoStyle:{
        height:100,
        width:100
    },
    title:{
        color:'#fff',
        marginTop:10,
        width:160,
        textAlign:'center',
        opacity:0.9
    }

};

export default Login;