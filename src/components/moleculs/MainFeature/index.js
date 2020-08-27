import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

const MainFeature = (props) => {
    return(
        <View style={{width:'25%',alignItems:'center'}}>
        <View style={{width:58,height:58,borderRadius:18,justifyContent:'center',alignItems:'center',borderWidth:1}}>
          <Image source={props.logo} />
        </View>
        <Text style={{fontWeight:'bold',fontSize:11,textAlign:'center',marginTop:6}}>
          {props.judul}
        </Text>
        </View> 
    )
  }


  export default MainFeature;











