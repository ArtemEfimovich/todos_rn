import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import React from 'react';
import {StyleSheet} from 'react-native';
import {store} from './src/redux/store.ts'
import HomeScreen from "./src/screens/HomeScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import TaskScreen from "./src/screens/TaskScreen";
import TodoListScreen from "./src/screens/TodoListScreen";
import {NavigationContainer} from "@react-navigation/native";


const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'gray',
        accent: 'white',
    }
}

const Stack = createNativeStackNavigator()


export default function App() {
    return (
        <StoreProvider store={store}>
            <PaperProvider theme={theme}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name='Home' component={HomeScreen}/>
                        <Stack.Screen name='Task' component={TaskScreen}/>
                        <Stack.Screen name='TodoList' component={TodoListScreen}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </PaperProvider>
        </StoreProvider>
    );
}

const styles = StyleSheet.create({});
