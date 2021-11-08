import React from 'react'
import {StyleSheet, View} from 'react-native'
import TodoListsList from "../components/TodoListsList";

export default function HomeScreen() {
    return (
        <View>
            <TodoListsList/>
        </View>
    );
};

const styles = StyleSheet.create({})