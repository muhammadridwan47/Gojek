import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
  
} from 'react-native';


const GoInfo = (props) => {
    return(
      
             <View style={{margin:17}}>
                 <View style={{height:15,width:60,marginLeft:-4}}>
                   <Image source={require('../../../assets/logo/gojek.png')} style={{width:undefined,height:undefined,resizeMode:'contain',flex:1}} />
                 </View>
                 <Text style={{fontWeight:'bold',fontSize:17,marginTop:15,marginBottom:20,color:'#1C1C1C'}}>Complete Your Profile</Text>
                 <View style={{flexDirection:'row'}}>
                   <View>
                     <Image source={require('../../../assets/dummy/facebook-connect.png')}/>
                   </View>
                   <View style={{marginLeft:16,flex:1}}>
                     <Text style={{fontSize:15,fontWeight:'bold',color:'#4A4A4A'}}>
                       Connect With Facebook  
                     </Text>
                     <Text style={{fontSize:15,fontWeight:'normal',color:'#4A4A4A',width:'70%'}}>
                       Login faster without Verification code
                     </Text>
                   </View>
                 </View>
               
                 <View style={{alignItems:'flex-end',marginTop:16}}>
                   <TouchableOpacity style={{paddingHorizontal:12,paddingVertical:8,backgroundColor:'#61A756',borderRadius:6}}>
                       <Text style={{fontWeight:'bold',fontSize:13,color:'white',textAlign:'center'}}>CONNECT</Text>
                   </TouchableOpacity>
                 </View>
                 <View style={{height:2,backgroundColor:'#f2f2f4',marginTop:16}}></View>
             </View>

    )
}


export default GoInfo;
