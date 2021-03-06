import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Switch, Modal, Image, StyleSheet } from 'react-native'
import ReactNativeBiometrics from 'react-native-biometrics';
import userStore from '../../zustandStore';
import EncryptedStorage from 'react-native-encrypted-storage';

const DuHoc = ({ navigation }) => {
    const { username, password } = userStore();

    const [enableFingerprint, setEnableFingerprint] = useState(false);
    const [showRegisterModal, setShowModal] = useState(false);

    const disableFingerprint = () => {
        ReactNativeBiometrics.deleteKeys()
        console.log('disable fingerprint');
        setShowModal(false);
        setEnableFingerprint(false);
    }
    const registerFingerprint = async () => {
        await ReactNativeBiometrics.createKeys("Enable Fingerprints")

        const payload = JSON.stringify({
            username: username,
            password: password,
        })


        ReactNativeBiometrics.simplePrompt({
            promptMessage: "Register Fingerprint",
        }).then(response => {
            const { success, error } = response;

            if (success) {
                setShowModal(false);
                setEnableFingerprint(true);

                console.log('set account storage');
                EncryptedStorage.setItem("Biometrics Account", payload);
            }

            if (error) {
                setEnableFingerprint(false);
                console.log('user cancel', username);
            }
        }).catch(e => {
            disableFingerprint()
            alert(e.message);
        })
    }
    useEffect(() => {

        ReactNativeBiometrics.biometricKeysExist().then(({ keysExist }) => {
            if (keysExist) {
                setEnableFingerprint(true);
            }
            else {
                registerFingerprint();
                setShowModal(true);
            }
        })
    }, []);

    const logout = async () => {
        navigation.navigate("Main");

        const { keysExist } = await ReactNativeBiometrics.biometricKeysExist()
        console.log('logout key: ', keysExist);
    }
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Hello {username || "Blank"}</Text>
            <Text>Password: {password || "Blank"}</Text>

            <Switch
                value={enableFingerprint}
                onValueChange={value => {
                    if (value) {
                        setEnableFingerprint(true);
                        registerFingerprint()
                    }
                    else {
                        console.log('disable fingerprint');
                        disableFingerprint()

                    }
                }}
            />
            <TouchableOpacity
                style={styles.logOutBtn}
                onPress={logout}
            >
                <Text style={{ color: "red" }}>Logout</Text>
            </TouchableOpacity>

            <Modal
                animationType="fade"
                transparent={true}
                visible={showRegisterModal}
                onRequestClose={() => {
                    console.log('on request close');
                    disableFingerprint();
                }}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => disableFingerprint()}
                    style={styles.fullscreen}
                >
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => { }}
                        style={styles.modal}>
                        <Text>X??c th???c v??n tay ????? ????ng nh???p l??? h??n</Text>
                        <TouchableOpacity
                            style={{ marginTop: 20 }}
                            onPress={registerFingerprint}
                        >
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={require("../../assets/icon/fingerprint.png")}
                            />

                        </TouchableOpacity>
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    fullscreen: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.25)",
        alignItems: "center",
        justifyContent: "center",
    },
    modal: {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        padding: 30,
        borderRadius: 14,
    },
    logOutBtn: {
        borderWidth: 1,
        borderColor: "red",
        paddingHorizontal: 20,
        paddingVertical: 10, borderRadius: 8,
        marginTop: 20,
    },

})

export default DuHoc;