import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import styles from './Profile.style'
import userStore from '../../zustandStore';

import ReactNativeBiometrics from 'react-native-biometrics'
import EncryptedStorage from 'react-native-encrypted-storage';



const Profile = ({ navigation }) => {

    const setAccount = userStore(state => state.setAccount)

    const [biometrics, setBiometrics] = useState(null);

    const [isDisplayBio, setIsDisplayBio] = useState(true);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const invalidToken = useRef(false);

    const login = async (type = "normal") => {

        if (invalidToken.current) {
            console.log('delete invalid key when login success');
            ReactNativeBiometrics.deleteKeys();
        }

        if (type == "normal") {
            const bioAccount = getBioAccount();

            if (bioAccount?.username != username) {
                console.log('clear fingerprint data when login to different account');
                EncryptedStorage.clear();
                ReactNativeBiometrics.deleteKeys();
            }

            setAccount(username, password)
        }

        console.log('login successfully');

        navigation.navigate("Home");
        invalidToken.current = false;
    }


    const controlPrivateKey = async (callbackFunc) => {
        const result = await ReactNativeBiometrics.biometricKeysExist()
        const { keysExist } = result;

        console.log('key exists: ', keysExist);

        if (!keysExist) {
            invalidToken.current = true;
            setIsDisplayBio(false);
            return;
        }
        callbackFunc && callbackFunc();
    }

    const getBioAccount = async () => {
        const bioAccount = await EncryptedStorage.getItem("Biometrics Account")

        if (bioAccount == null) return

        const account = JSON.parse(bioAccount)

        return account;
    }
    const validateFingerprint = async () => {

        console.log('control fingerprint');

        ReactNativeBiometrics.createSignature({
            promptMessage: "Sign In",
            payload: "User Login",
        }).then(async (result) => {
            const { success, error } = result;
            invalidToken.current = false;
            if (success) {

                const bioAccount = await getBioAccount();

                setAccount(bioAccount?.username, bioAccount?.password);

                login("fingerprint");
            }
            if (error) {

                console.log("e:", error);
            }


        }).catch(e => {
            console.log('e: ', e.message);
            alert(e.message);

            EncryptedStorage.clear();
            invalidToken.current = true;

            setIsDisplayBio(false);
        })

    }

    const checkSensorAvailable = () => {
        // console.log('check sensor available');

        ReactNativeBiometrics.isSensorAvailable()
            .then(async (resultObject) => {
                const { available, biometryType } = resultObject

                if (available) {
                    setBiometrics(biometryType);

                    controlPrivateKey(validateFingerprint);
                }


            })
    }
    useEffect(() => {
        checkSensorAvailable()
    }, [])

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', async () => {
            // The screen is focused
            setIsDisplayBio(true);
            controlPrivateKey()

        });
        return unsubscribe;
    }, [navigation]);



    return (
        <View style={styles.main}>

            <TextInput
                placeholder='username'
                style={{
                    borderWidth: 1,
                    paddingVertical: 10,
                    paddingHorizontal: 18,
                    width: "70%",
                    margin: 10,
                }}
                onChangeText={setUsername}
                value={username}
            />

            <TextInput
                placeholder='password'
                style={{
                    borderWidth: 1,
                    paddingVertical: 10,
                    paddingHorizontal: 18,
                    width: "70%",
                    margin: 10,
                }}
                value={password}
                onChangeText={setPassword}

                secureTextEntry
            />
            <TouchableOpacity
                style={{
                    borderWidth: 1,
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 8,
                }}
                onPress={() => {

                    login()
                }}
            >
                <Text>Login</Text>
            </TouchableOpacity>
            {
                isDisplayBio &&
                <TouchableOpacity
                    style={{ marginTop: 50 }}
                    onPress={validateFingerprint}
                >
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={require("../../assets/icon/fingerprint.png")}
                    />

                </TouchableOpacity>
            }


        </View >
    )
}

export default Profile;