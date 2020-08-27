
import React from 'react';
import {
  View,
  Text,
  Image
  
} from 'react-native';

const ScrollableItem = (props) =>{
    return(

   <View style={{marginRight:16}}>
        <View style={{width:150,height:150,borderRadius:10}}>
        <Image source={props.gambar} style={{width:undefined,height:undefined,resizeMode:'cover',flex:1,borderRadius:10}} />
        </View>
        <Text style={{fontWeight:'bold',fontSize:16,color:'#1c1c1c',marginTop:12}}>{props.judul}</Text>
    </View>
     
    )
      
    }


    export default ScrollableItem;