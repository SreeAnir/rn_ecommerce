import React,{ Component } from 'react';
import {
View,
Text,
ListView
} from 'react-native';
import Brands from '../apis/fetchBrands';
import ShowBrands from './showBrands';
import {Actions} from 'react-native-router-flux';

const brandObject = new Brands();

class BrandByCategory extends Component{
    constructor(){
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1 , r2) =>
         r1 !== r2 });
         this.state={
            dataSource:ds
         };
        this.renderBrands = this.renderBrands.bind(this)
    }
componentWillMount(){
    brandObject.fetchBrands(this.props.categoryID)
    .then(res => res.json())
    .then(json => {
      this.setState({ dataSource: this.state.dataSource.cloneWithRows(json) });
    });
   
}

    render(){
        return(
                <View style={{flex:1,backgroundColor:'#F5F4F4',margin:7,marginTop:60}}>
                <ListView
                enableEmptySections={true}
                dataSource ={this.state.dataSource}
                renderRow = {(Brands) => this.renderBrands(Brands.brand)}
                />
             
                </View>
          
        );
    }
    renderBrands(brands)    {
        return (
            <ShowBrands brands={brands}/>
        );

    }
}


export default BrandByCategory;
