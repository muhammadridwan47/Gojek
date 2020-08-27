import React, { Component } from 'react';
import {
    ScrollView,
    View

  } from 'react-native';

import SearchFeature from '../../../components/moleculs/SearchFeature';
import GoNews from '../../../components/moleculs/GoNews';
import GoInfo from '../../../components/moleculs/GoInfo';
import GoBanner from '../../../components/moleculs/GoBanner';
import ScrorablleProduct from '../../../containers/organisms/ScrorablleProduct';
import Navbar from '../../../containers/organisms/Navbar';
import HomeMainFeature from '../../../containers/organisms/HomeMainFeature';
import HomeGopay from '../../../containers/organisms/HomeGopay';



class Home extends Component {
    render()
    {
        return (
            <View style={{flex:1,marginTop:12}}>
                  <View style={{flex:1,backgroundColor:'white'}}>
      
                    <SearchFeature  placeHolder="What do you want to eat!"/>
      
                    <ScrollView>
                     <HomeGopay/>
      
                        <HomeMainFeature/>
    
                        <View style={{height:17,backgroundColor:'#f2f2f4',marginTop:20}}></View>
      
                        <GoNews onTekan={() => this.props.navigation.navigate('Profile')}/>
                        {/* <GoNews /> */}
      
      
                        <GoInfo />
      
    
                        <GoBanner />
                        
                        <ScrorablleProduct/>
                          
      
      
      
                    </ScrollView>
      
                  </View>
            
      
      
                   <Navbar/>
      
            </View>
        );
    }
}


export default Home;