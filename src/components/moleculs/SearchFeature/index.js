import React from 'react';
import {
  View,
  TextInput,
  Image
} from 'react-native';



const SearchFeature = (props) => {
  return(

<View style={{marginHorizontal:17,flexDirection:'row'}}>
            
{/* search bar  */}
<View style={{position:'relative',flex:1}}>
  <TextInput placeholder={props.placeHolder} style={{borderWidth:1,borderColor:'#E8E8E8',borderRadius:25,height:40,fontSize:13,paddingLeft:45,paddingRight:20,color:'black',backgroundColor:'white',marginRight:18}} />
  <Image source={require('../../../assets/icon/search.png')} style={{position:'absolute',top:8,left:8}}/>
</View>
{/* icon promo  */}
<View style={{position:'relative',width:35,justifyContent:'center'}}>
  <Image source={require('../../../assets/icon/promo.png')} />
</View>

</View> 
  )
}


export default SearchFeature;
