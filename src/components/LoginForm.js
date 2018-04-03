import React,{Component} from 'react';
import {
View,
Text,
TextInput,
TouchableOpacity
} from 'react-native';

import axios from 'axios';



class LoginForm extends Component {
    state={
        email:'',
        password:''
    };
    checkLogin(){
        var params = new URLSearchParams();
        params.append('email',this.state.email);
        params.append('password',this.state.password);
    axios.post('http://hani2.fustech.net/api/login',params)
  
    .then(function (response) {
       
    console.log(response.data);
  })
  .catch(function (error) {
      
    console.log(error);
  });
}

    render(){
        return(
            <View style={styles.mainContainer}>
                <TextInput
                placeholder="username or email"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                style={styles.input}
                underlineColorAndroid='transparent' 
                onChangeText={email => this.setState({ email })} 


                 />
                <TextInput
                placeholder="password"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="go"
                secureTextEntry
                style={styles.input}
                 underlineColorAndroid='transparent'
                onChangeText={password => this.setState({ password })} 
 

                 />
                 <TouchableOpacity onPress={this.checkLogin.bind(this)} style={styles.btnContainer}>
                     <Text style={styles.btn}>Login</Text>
                 </TouchableOpacity>

            </View>
        );
    }
}

const styles={
    mainContainer:{
        padding:20
    },
    input:{
        height:40,
        backgroundColor:'rgba(255,255,255,0.2)',
        marginBottom:10,
        color:'#fff',
        paddingHorizontal:10
    },
    btnContainer:{
        backgroundColor:'#2980b9',
        paddingVertical:15

    },
    btn:{
        textAlign:'center',
        color:'#ffffff',
        fontWeight:'700'
    }

};

export default LoginForm;