import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

const GopayFeature = (props) => {
    return(
      <View style={{flex:1,alignItems:'center'}}>
        <Image source={props.logo} />
        <Text style={{color:'white',fontSize:13,fontWeight:'bold',marginTop:15}}>{props.nama}</Text>
      </View>
    )
  }


  export default GopayFeature;