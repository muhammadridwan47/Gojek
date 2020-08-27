import React from 'react'
import {View,Image,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

 const NavbarIcon = (props) => {
    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            {/* <TouchableOpacity onPress={props.tekan}> */}
                <View style={{width:26,height:26}}>
                    <Image source={props.icon}></Image>
                </View>
                <Text style={{fontSize:10,color: props.active ? '#43AB4A' : '#545454',marginTop:4}}>{props.judul}</Text>
            {/* </TouchableOpacity> */}
        </View>
    )
}

export default NavbarIcon;