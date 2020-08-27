
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
  
} from 'react-native';

const GoBanner = (props) =>{
    return(
      <View>
    
    
    <View style={{marginHorizontal:17}}>
                      <View style={{position:'relative',borderBottomWidth:2,borderBottomColor:'#E8E9ED'}}>
                          <Image source={require('../../../assets/dummy/food-banner.jpg')} style={{height:170,width:'100%',borderRadius:6}}/>
                          {/* background opacity  */}
                          <View style={{position:'absolute',height:'100%',width:'100%',backgroundColor:'black',opacity:0.15}}></View>
                          {/* logo Go-Jek */}
                          <View style={{height:15,width:40,position:'absolute',top:16,left:16}}>
                            <Image source={require('../../../assets/logo/white.png')} style={{width:undefined,height:undefined,resizeMode:'contain',flex:1}} />
                          </View>
                          <View style={{position:'absolute',bottom:0,left:0,width:'100%',flexDirection:'row',justifyContent:'space-between'}}>
                            <View style={{paddingHorizontal:16}}>
                              <Text style={{fontSize:18,fontWeight:'bold',color:'white',marginBottom:8}}>Free GO-FOOD Voucher</Text>
                              <Text style={{fontSize:12,color:'white',marginBottom:16}}>Quick, They before run out!</Text>
                            </View>
                            <View style={{alignItems:'flex-end',paddingHorizontal:16}}>
                              <TouchableOpacity style={{paddingHorizontal:12,paddingVertical:8,backgroundColor:'#61A756',borderRadius:6}}>
                                <Text style={{fontWeight:'bold',fontSize:13,color:'white',textAlign:'center'}}>GET VOUCHER</Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                      </View>
                      
                      {/* garis abu abu  */}
                      <View style={{height:2,backgroundColor:'#f2f2f4',marginTop:16,marginBottom:16}}></View>
                      </View>
    
    
    
      </View>
    )
      
    }


    export default GoBanner;