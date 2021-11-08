import React from 'react'
import {StyleSheet, TextInput, View} from 'react-native';
import {Colors, IconButton, } from "react-native-paper";

export default function AddItemForm() {
    return (
        <View  style = {styles.container}>
            <TextInput style = {styles.textInput}
                       placeholder={"Title"}
            />
            <IconButton
                icon="briefcase-plus"
                color={Colors.grey400}
                size={30}
                touchSoundDisabled = 'Pick'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    textInput:{
        width:"80%",
        height:40,
        marginLeft:20,
        borderRadius:10,
        borderWidth:1,
        borderColor:"lightgray"
    }
})