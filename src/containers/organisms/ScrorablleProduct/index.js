
import React,{Component} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView
  
  
} from 'react-native';
import ScrollableItem from '../../../components/moleculs/ScrollableItem';



class ScrorablleProduct extends Component{



    render(){
        return(

                 <View style={{marginHorizontal:17}}>
                 <View style={{height:15,width:60}}>
                   <Image source={require('../../../assets/logo/go-food.png')} style={{width:undefined,height:undefined,resizeMode:'contain',flex:1}} />
                 </View>

                 <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:16}}>
                   <View>
                     <Text style={{fontSize:17,fontWeight:'bold',color:'#1C1C1C'}}>Nearby Resturants</Text>
                   </View>
                   <View>
                     <Text style={{fontSize:17,fontWeight:'bold',color:'#61A756'}}>See All</Text>
                   </View>
                 </View>


               <ScrollView horizontal>

                 <ScrollableItem gambar={require('../../../assets/dummy/go-food-kfc.jpg')} judul="KFC Aoen Mall"/>
                 <ScrollableItem gambar={require('../../../assets/dummy/go-food-gm.jpg')} judul="Bakmi GM Aoen Mall"/>
                 <ScrollableItem gambar={require('../../../assets/dummy/go-food-orins.jpg')} judul="Martabak Orins"/>
                 <ScrollableItem gambar={require('../../../assets/dummy/go-food-banka.jpg')} judul="Martabak Banka"/>
                 <ScrollableItem gambar={require('../../../assets/dummy/go-food-pak-boss.jpg')} judul="Ayam Bakar Pak Boss"/>

               </ScrollView>
               <View style={{height:2,backgroundColor:'#f2f2f4',marginTop:16,marginBottom:20}}></View>

             </View>





        )
    }



}


export default ScrorablleProduct;