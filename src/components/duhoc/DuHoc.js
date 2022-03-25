import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native'
import ReactNativeBiometrics from 'react-native-biometrics';


const DuHoc = ({ navigation }) => {

    const [enableFingerprint, setEnableFingerprint] = useState(false);

    useEffect(() => {
        ReactNativeBiometrics.biometricKeysExist().then(({keysExist}) => {
            if (keysExist) {
                setEnableFingerprint(true);
            }
        })
    }, []);

    const logout = () => {
        navigation.navigate("Main");

    }
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Hello User</Text>

            <Switch
                value={enableFingerprint}
                onValueChange={value => {
                    if (value) {
                        console.log('enable fingerprint');
                        ReactNativeBiometrics.createKeys("Enable Fingerprints");
                        setEnableFingerprint(true);
                    }
                    else {
                        console.log('disable fingerprint');
                        ReactNativeBiometrics.deleteKeys();
                        setEnableFingerprint(false);

                    }
                }}
            />
            <TouchableOpacity
                style={{
                    borderWidth: 1,
                    borderColor: "red",
                    paddingHorizontal: 20,
                    paddingVertical: 10, borderRadius: 8,
                    marginTop: 20,
                }}
                onPress={logout}
            >
                <Text style={{ color: "red" }}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DuHoc;