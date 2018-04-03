import React,{Component} from 'react';
import {
View,
Text,
TextInput,
TouchableOpacity
} from 'react-native';

import axios from 'axios';

class RegistrationForm extends Component {
    state = {
        name:'',
        password:'',
        email:'',
        dob:'',
        gender:'',
        city:''
    };

addCustomer(){

       var params = new URLSearchParams();
        params.append('name',this.state.name);
        params.append('email',this.state.email);
        params.append('password',this.state.password);
        params.append('dob',this.state.dob);
        params.append('gender',this.state.gender);
        params.append('city',this.state.city);
    axios.post('http://hani2.fustech.net/api/addCustomer',params)
  
    .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  
}
    render(){
        return(
            <View style={styles.mainContainer}>
                <TextInput
                placeholder="Enter Username"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                style={styles.input}
                underlineColorAndroid='transparent'
                value={this.state.name}
                onChangeText={name => this.setState({ name })} 

                 />

                  <TextInput
                placeholder="Enter Email"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                style={styles.input}
                underlineColorAndroid='transparent' 
                value={this.state.email}
                onChangeText={email => this.setState({ email })} 

                 />
                <TextInput
                placeholder="Enter Password"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="go"
                secureTextEntry
                style={styles.input}
                 underlineColorAndroid='transparent'
                 value={this.state.password}
                onChangeText={password => this.setState({ password })}  

                 />

                     <TextInput
                placeholder="Enter Date of Birth"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="go"
                style={styles.input}
                 underlineColorAndroid='transparent'
                 value={this.state.dob}
                onChangeText={dob => this.setState({ dob })}  

                 />


                     <TextInput
                placeholder="Enter gender"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="go"
                style={styles.input}
                 underlineColorAndroid='transparent'
                 value={this.state.gender}
                onChangeText={gender => this.setState({ gender })}  

                 />

                     <TextInput
                placeholder="Enter City"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="go"
                style={styles.input}
                 underlineColorAndroid='transparent'
                 value={this.state.city}
                onChangeText={city => this.setState({ city })}  

                 />
                 <TouchableOpacity onPress={this.addCustomer.bind(this)} style={styles.btnContainer}>
                     <Text style={styles.btn}>Register</Text>
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
        paddingHorizontal:10,
        borderRadius:5
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

export default RegistrationForm;