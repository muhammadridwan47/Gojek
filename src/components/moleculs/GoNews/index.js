import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
  
} from 'react-native';


const GoNews = ({onTekan}) => {
    return(
        <View>

        <View style={{marginTop:17,marginHorizontal:17}}>
        <View style={{position:'relative',backgroundColor:'pink'}}>
          <Image source={require('../../../assets/dummy/sepak-bola.jpg')} style={{height:170,width:'100%',borderRadius:6}}/>
        
          <View style={{position:'absolute',height:'100%',width:'100%',backgroundColor:'black',opacity:0.15,borderRadius:6}}></View>
          <View  style={{height:15,width:55,position:'absolute',top:16,left:16}}>
          <Image source={require('../../../assets/logo/white.png')} style={{width:undefined,height:undefined,resizeMode:"contain",flex:1}}/>
          </View>
        </View>
        <View style={{marginTop:16,marginBottom:12}}>
          <Text style={{fontWeight:'bold',fontSize:16,color:'#1C1C1C'}}>GO-News</Text>
          <Text style={{fontSize:14,fontWeight:'500',color:'#7A7A7A'}}>Dimas Drajat selamatkan penalti, Timnas U-23 kalahkan Brunei</Text>

        </View>
        <View style={{alignItems:'flex-end'}}>
          <TouchableOpacity style={{paddingHorizontal:11,paddingVertical:8,backgroundColor:'#61A756',borderRadius:6}} onPress={onTekan}>
            <Text style={{fontWeight:'bold',fontSize:13,color:'white',textAlign:'center'}} >Read</Text>
          </TouchableOpacity>
        </View>
    </View>

    
     <View style={{height:2,backgroundColor:'#f2f2f4',marginTop:16,marginHorizontal:17}}></View>


     </View>
    )
}


export default GoNews;