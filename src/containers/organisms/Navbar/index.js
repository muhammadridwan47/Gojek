import React, { Component } from 'react';
import { View,Text } from 'react-native';
import NavbarIcon from '../../../components/moleculs/NavbarIcon';
import { TouchableOpacity } from 'react-native-gesture-handler';


class Navbar extends Component {
    render()
    {
        return(
            <View>
                
                  <View style={{height:54,flexDirection:'row',backgroundColor:'white'}}>
                     {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}> */}
                      <NavbarIcon  judul="Home" icon={require('../../../assets/icon/home-active.png')} active />
                     {/* </TouchableOpacity> */}
                      <NavbarIcon  judul="Order" icon={require('../../../assets/icon/order.png')}/>
                      <NavbarIcon  judul="Help" icon={require('../../../assets/icon/help.png')}/>
                      <NavbarIcon  judul="Inbox" icon={require('../../../assets/icon/inbox.png')}/>
                      <NavbarIcon  judul="Account" icon={require('../../../assets/icon/account.png')}/>
                  </View>
            </View>
          )
    }
}


export default Navbar;