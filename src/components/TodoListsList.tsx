import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import TodoLists from "./TodoLists";
import AddItemForm from "./AddItemForm";

export default function TodoListsList() {
    return (
        <View style = {styles.container}>
            <AddItemForm/>
            <TodoLists/>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        display:"flex",

    }
})