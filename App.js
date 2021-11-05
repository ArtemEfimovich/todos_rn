import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import React from 'react';
import {StyleSheet} from 'react-native';
import {store} from './src/redux/store.ts'
import HomeScreen from "./src/screens/HomeScreen";


const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'gray',
        accent: 'white',
    }
}


export default function App() {
    return (
        <StoreProvider store={store}>
            <PaperProvider theme={theme}>
                <HomeScreen/>
            </PaperProvider>
        </StoreProvider>
    );
}

const styles = StyleSheet.create({});
