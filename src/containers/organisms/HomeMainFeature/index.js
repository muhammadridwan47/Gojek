
import React,{Component} from 'react';
import {
  View,  
  
} from 'react-native';
import MainFeature from '../../../components/moleculs/MainFeature';



class HomeMainFeature extends Component{



    render(){
        return(


            <View>
                   
             <View style={{flexDirection:'row',flexWrap:'wrap',marginHorizontal:2,marginTop:18}}>
  
                <View style={{justifyContent:'space-between',flexDirection:'row',width:'100%',marginBottom:18}}>
                  <MainFeature judul="GO-RIDE" logo={require('../../../assets/icon/go-ride.png')} />
                  <MainFeature judul="GO-CAR" logo={require('../../../assets/icon/go-car.png')} />
                  <MainFeature judul="GO-BLUEBIRD" logo={require('../../../assets/icon/go-bluebird.png')} />
                  <MainFeature judul="GO-SEND" logo={require('../../../assets/icon/go-send.png')} />
               </View>
               <View style={{justifyContent:'space-between',flexDirection:'row',width:'100%'}}>
                  <MainFeature judul="GO-DEALS" logo={require('../../../assets/icon/go-deals.png')} />
                  <MainFeature judul="GO-PULSA" logo={require('../../../assets/icon/go-pulsa.png')} />
                  <MainFeature judul="GO-FOOD" logo={require('../../../assets/icon/go-food.png')} />
                  <MainFeature judul="GO-MORE" logo={require('../../../assets/icon/go-more.png')} />
               </View>
              </View>
           </View>



        )
    }



}


export default HomeMainFeature;