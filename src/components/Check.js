import React,{Component} from 'react';
import{
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Text,
  View
} from 'react-native';

import axios from 'axios';



class Check extends Component {
  state = {
      name: "",
      password: "",
      dob:"",
      email: "",
      gender:"",
      created:"",
      city:""

    };
   

   onRegisterPressed() {
  
      axios.post('https://afternoon-beyond-22141.herokuapp.com/users', {
        
            name: this.state.name,
            password:this.state.password,
            dob: this.state.dob,
            email: this.state.email,
            gender: this.state.gender,
            created: this.state.created,
            city: this.state.city
        })
  
    .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    }
 
 
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          Join us now!
        </Text>
        <TextInput
          onChangeText={ (text)=> this.setState({email: text}) }
          underlineColorAndroid='transparent' 
          style={styles.input} placeholder="Email">
        </TextInput>
        <TextInput
          onChangeText={ (text)=> this.setState({name: text}) }
          underlineColorAndroid='transparent'
          style={styles.input} placeholder="Name">
        </TextInput>

        <TextInput
          onChangeText={ (text)=> this.setState({password: text}) }
          underlineColorAndroid='transparent'
          style={styles.input} placeholder="Password"
          secureTextEntry={true}>
        </TextInput>

        <TextInput
          onChangeText={ (text)=> this.setState({dob: text}) }
          underlineColorAndroid='transparent'
          style={styles.input} placeholder="date of birth">
        </TextInput>
        <TextInput
          onChangeText={ (text)=> this.setState({city: text}) }
          underlineColorAndroid='transparent'
          style={styles.input} placeholder="city">
        </TextInput>
        <TextInput
          onChangeText={ (text)=> this.setState({gender: text}) }
          underlineColorAndroid='transparent'
          style={styles.input}
          placeholder="gender">
        </TextInput>
        <TouchableHighlight onPress={this.onRegisterPressed.bind(this)} style={styles.button}>
          <Text style={styles.buttonText}>
            Register
          </Text>
        </TouchableHighlight>


      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
    paddingTop: 80
  },
  input: {
    height: 50,
    width:300,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec'
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },
  heading: {
    fontSize: 30,
  },
  error: {
    color: 'red',
    paddingTop: 10
  },
  loader: {
    marginTop: 20
  }
});

export default Check;