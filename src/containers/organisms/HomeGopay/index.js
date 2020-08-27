
import React,{Component} from 'react';
import {
  View,Image,Text
  
} from 'react-native';
import GopayFeature from '../../../components/moleculs/GopayFeatures';



class HomeGopay extends Component{



    render(){
        return(

            <View style={{marginHorizontal:17,marginTop:8}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#2C5FB8',borderTopRightRadius:4,borderTopLeftRadius:4,padding:14}}>
                <Image source={require('../../../assets/icon/gopay.png')}/>
                <Text style={{fontWeight:'bold',color:'white',fontSize:17}}>Rp.50.000</Text>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between',paddingBottom:14,paddingTop:20,backgroundColor:'#2F65BD',borderBottomLeftRadius:4,borderBottomRightRadius:4}}>

              <GopayFeature nama="Pay" logo={require('../../../assets/icon/pay.png')}/>
              <GopayFeature nama="Nearby" logo={require('../../../assets/icon/nearby.png')}/>
              <GopayFeature nama="Top Up" logo={require('../../../assets/icon/topup.png')}/>
              <GopayFeature nama="More" logo={require('../../../assets/icon/more.png')}/>

            </View>  

          </View>   

        )
    }



}


export default HomeGopay;