import React,{Component} from 'react'
import {Router, Scene} from 'react-native-router-flux';

import Home from './components/HomePage';
import Brands from './components/BrandByCategory';
import Offers from './components/OfferList';
import Splash from './components/Splash';
import Login from './components/Login';
import Register from './components/Register';
import Check from './components/Check';
import OfferDetail from './components/OfferDetail';
import Box from './components/lightbox';
import Photo from './components/Camera';
import Drawer from './components/common/Drawer';
import DropDown from './components/common/Picker';

class Routes extends Component {
    render()    {
        return (
            <Router>
             <Scene key="root">
             <Scene key="dropdown" component={DropDown} hideNavBar={true}  /> 
             <Scene key="drawer" component={Drawer} title="Account Details" /> 
              <Scene key="cam" component={Photo} hideNavBar={true} />
            {/*<Scene key="view" component={Box} initial={true} hideNavBar={true} />*/}
            {/*<Scene key="login" component={Login} initial={true} hideNavBar={true}/>*/}
            {/*<Scene key="register" component={Register} initial={true} hideNavBar={true}/>*/}
            {/*<Scene key="check" component={Check} initial={true} hideNavBar={true}/>*/}
            {/*<Scene key="splash" component={Splash} initial={false} hideNavBar={true}/>*/}
              <Scene key="home" component={Home} hideNavBar={true} initial={true}/>
              <Scene key="brand" component={Brands} hideNavBar={false}/>
              <Scene key="offer" component={Offers} hideNavBar={false} />
              <Scene key="offerDetail" component={OfferDetail} hideNavBar={false} />

            </Scene>
            </Router>
        )
    }
}

export default Routes;