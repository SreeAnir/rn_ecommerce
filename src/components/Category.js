import React,{ Component } from 'react';
import {
Text,
View,
Image,
TouchableOpacity
} from 'react-native';
import { Card,CardSection } from './common';
import {Actions} from 'react-native-router-flux';


class Category extends Component {
    state = {
        categories:[]
    };
componentWillMount(){
    fetch('http://hani2.fustech.net/api/cats')
    .then((response) => response.json())
    .then((responseData) => this.setState({ categories:responseData }));
}

renderCategories(){
    return this.state.categories.map(categories =>
    <TouchableOpacity onPress={()=>Actions.brand({
        categoryID: categories.id,
        categoryTitle:categories.title
         })}>
       <View style={{margin:4,alignItems:'center',borderWidth:0.5,borderColor:'#ddd'}}>
        <Image 
        style={styles.imageStyle}
        source={{uri :'http://hani.fustech.net/categories/'+categories.image}}
        />
        <Text style={styles.textStyle}>{categories.title}</Text>
        </View> 
     </TouchableOpacity>
    );
    }
    render(){
        return(
            <View style={styles.containerStyle}>
            {this.renderCategories()}
            </View>
        );
    }
}


const styles = {
    containerStyle:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        flexWrap:'wrap'
    },
    imageStyle:{
        marginTop:5,
        height:50,
        width:50
        
        // flex:1
        },
    textStyle:{
        // flex:3,
        // marginLeft:2,
        fontSize:13,
        width:80,
        height:50,
        marginTop:5,
        marginBottom:-10,
        textAlign:'center'
            // paddingLeft:15
    }
};

export default Category;