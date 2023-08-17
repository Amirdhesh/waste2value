import React from "react";
import {Text,View,StyleSheet} from "react-native";

export function ProductAddedScreen()
{
    return(
    <View style={Styles.container}>
        <Text style={Styles.text}> Product Added Successfully</Text>
    </View>
    );
}

export default ProductAddedScreen;

const Styles= StyleSheet.create(
    {
        container: {
            top: 200,
            alignItems: 'center',
            flex:1
        },
        text: {
            fontSize: 20 ,
            fontWeight: 'bold',
            color: "red"
        }
    }
)