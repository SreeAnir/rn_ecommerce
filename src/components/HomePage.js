import React, {Component} from 'react';
import {
View,
Text,
ScrollView
} from 'react-native';

import { Navbar } from './common';
import {Card,CardSection,Button,Footer} from './common';
import Icon from 'react-native-vector-icons/FontAwesome';
import Slider from './Slider';
import Category from './Category';
import CategoryByOffer from './CategoryByOffer';
import OfferList from './OfferList';
import OfferDetail from './OfferDetail';
import BrandByCategory from './BrandByCategory';
import {Actions} from 'react-native-router-flux';

class Home extends Component {
    render(){
        return(
            <ScrollView>
                <Navbar />
            <CardSection>
                <Slider />
            </CardSection>
                <CardSection>
                    <Button onPress={Actions.cam}>
                      <Text>
                        <Icon name="camera" size={25} color="#fff" />
                      </Text>
                      <Text> UPLOAD INVOICE </Text>
                    </Button>
                </CardSection>
                <CardSection>
                 <Category />

                </CardSection>
                
            
            <CardSection>
                 <CategoryByOffer titleText="Car" /> 
                 
            </CardSection>
              <CardSection>
                 <CategoryByOffer titleText="Mobile" /> 
                 
            </CardSection>

              <CardSection>
                 <CategoryByOffer titleText="Electronics" /> 
                 
            </CardSection>

              <CardSection>
                 <CategoryByOffer titleText="Shopping" /> 
                 
            </CardSection>

              <CardSection>
                 <CategoryByOffer titleText="Home Appliances" /> 
                 
            </CardSection>

            <Footer />
            </ScrollView>
        );
    }

}


export default Home;