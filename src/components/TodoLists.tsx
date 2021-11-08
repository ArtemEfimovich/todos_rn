import React from 'react'
import {StyleSheet, Text, TextInput, View, Button} from 'react-native'
import {Colors, IconButton} from "react-native-paper";
import AddItemForm from "./AddItemForm";
import Task from "./Task";

export default function TodoLists() {
    return (
        <View >

            <View style={styles.container}>
                <TextInput style={styles.textInput}
                placeholder={"Title"}
                />
                <IconButton
                    icon="bucket"
                    color={Colors.grey400}
                    size={30}
                    touchSoundDisabled='Pick'
                />
            </View>
            <AddItemForm/>
            <Task/>
            <View style={styles.buttonContainer}>
                <Button title={"All"} color={"black"} onPress={() => console.log('All')}/>
                <Button title={"Active"} onPress={() => console.log('Active')}/>
                <Button title={"Completed"} color={"red"} onPress={() => console.log('Completed')}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop:15,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
    },
    textInput: {
        width: "80%",
        height: 40,
        marginLeft: 20,
        borderRadius: 10,
        borderWidth:1,
        borderColor:"lightgray"
    },
    buttonContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center"
    }
})