import React from "react";
import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import {Controller, useForm} from "react-hook-form";
import {loginTC} from "../redux/auth-reducer";
import {useDispatch} from "react-redux";

export default function Login() {

    const dispatch = useDispatch()

    const {control, handleSubmit, formState: {errors},reset} = useForm();
    const onSubmit = data => {
        console.log(data)
        dispatch(loginTC(data))
        reset()
    }




    return (
        <View>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder="email"
                    />
                )}
                name="email"
                defaultValue=""
            />
            {errors.login && <Text>Email is required.</Text>}

            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        secureTextEntry
                        placeholder="password"
                        autoCorrect={false}
                    />
                )}
                name="password"
                defaultValue=""
            />
            {errors.password && <Text>Password is required.</Text>}
            <Button title="Submit" onPress={handleSubmit(onSubmit)}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    input: {
        width: "80%",
        height: 40,
        marginLeft: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "lightgray"
    }
})