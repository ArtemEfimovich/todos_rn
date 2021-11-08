import React from 'react'
import {StyleSheet, TextInput, View} from 'react-native'
import {Checkbox, Colors, IconButton} from "react-native-paper";



export default function Task() {

    const [text, setText] = React.useState('');

    return (
        <View style={styles.container}>
            <Checkbox
                status={'checked'}
                color = 'red'
            />
            <TextInput style={styles.textInput}
                value={text}
                onChangeText={text => setText(text)}
            />
            <IconButton
                icon="bucket"
                color={Colors.grey400}
                size={20}
                touchSoundDisabled = 'Pick'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        marginLeft: 30,
        marginTop: 10,
        width: "70%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    textInput: {
        width: "80%",
        height: 40,

        borderRadius: 10,
        borderWidth:1,
        borderColor:"lightgray"
    },
})