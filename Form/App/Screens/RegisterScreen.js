import React from "react";
import Screen from '../Components/Screen';
import { Image, StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';
import AppTextInput from "../Components/AppTextInput";
import AppButton from "../Components/AppButton";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
    name: Yup.string().required()
})


function RegisterScreen(props) {
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require('../Assets/DPFM.png')} />

            <Formik initialValues={{ name: '', email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, errors }) => (
                    <>
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="account"
                            name="name"
                            placeholder="Name"
                        />
                        <Text style={{ color: 'red' }}>{errors.name}</Text>
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            KeyboardType="email-address"
                            onChangeText={handleChange("email")}
                            placeholder="Email"
                            textContentType="emailAddress"
                        />
                        <Text style={{ color: 'red' }}>{errors.email}</Text>
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            onChangeText={handleChange("password")}
                            KeyboardType="password"
                            placeholder="Password"
                            secureTextEntry
                            textContentType="password"
                        />
                        <Text style={{ color: 'red' }}>{errors.password}</Text>
                        <AppButton title="Register" onPress={handleSubmit} />

                    </>
                )}
            </Formik>


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