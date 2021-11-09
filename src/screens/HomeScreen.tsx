import React from 'react'
import {StyleSheet, View} from 'react-native'
import TodoListsList from "../components/TodoListsList";
import Login from "../components/Login";

export default function HomeScreen() {
    return (
        <View>
            <Login/>
            <TodoListsList/>
        </View>
    );
};

const styles = StyleSheet.create({})