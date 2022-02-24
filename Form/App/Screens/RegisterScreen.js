import React from "react";
import Screen from '../Components/Screen';
import { Image, StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';
import AppTextInput from "../Components/AppTextInput";
import AppButton from "../Components/AppButton";
import * as Yup from "yup";
import ErrorMessage from '../Components/ErrorMessages'
import AppFormField from "../Components/AppFormField";
import AppForm from "../Components/AppForm";
import SubmitButton from "../Components/SubmitButton";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
    name: Yup.string()
})


function RegisterScreen(props) {
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require('../Assets/DPFM.png')} />

            <AppForm initialValues={{ name: '', email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="account"
                    name="name"
                    placeholder="Name"
                />

                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    KeyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />


                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    KeyboardType="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <SubmitButton title="Login" />


            </AppForm>


        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 160,
        height: 160,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    },

});



export default RegisterScreen;