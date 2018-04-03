import React,{ Component } from 'react';
import {
View,
Text,
ListView
} from 'react-native';
import Offers from '../apis/fetchOffers';
import ShowOffers from './ShowOffers';
import {Actions} from 'react-native-router-flux';


const offerObject  = new Offers();

class OfferList extends Component {
    constructor(){
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1 , r2) =>
            r1 !== r2 });
            this.state={
            dataSource:ds
            };
            this.renderOffers = this.renderOffers.bind(this)
    }

    componentWillMount(){
        offerObject.fetchOffers(this.props.brandID)
        .then(res => res.json())
        .then(json => {
                this.setState({ dataSource: this.state.dataSource.cloneWithRows(json) });  
        });
    }
    render(){
        return(
            <View style={{flex:1,marginTop:50}}>
                 <ListView
                enableEmptySections={true}
                dataSource ={this.state.dataSource}
                renderRow = {(Offers) => this.renderOffers(Offers)}
                />     
            </View>
        );
    }

renderOffers(offers){
    return(
        <ShowOffers offers={offers}/>
    );
}
}


export default OfferList;