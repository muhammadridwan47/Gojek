import React, { Component } from 'react';
import { View,Text,Button } from 'react-native';


const NewsDetail = (props) => {
    return(

        <View>

        <Text>News Detail</Text>
        <Button
             title="Go to tes1" onPress={() => props.navigation.push('tes1')}/>
        </View>
        
    )
}

export default NewsDetail;