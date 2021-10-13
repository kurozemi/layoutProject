import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native'
import styles from './Profile.style'
import Contacts from 'react-native-contacts';
import { PermissionsAndroid } from 'react-native';
import { Platform } from 'react-native';
import Draggable from 'react-native-draggable';


const Profile = () => {

    const [contacts, setContacts] = useState([]);

    const renderItem = (contact) => {
        return (
            <View style={{ marginBottom: 24 }}>
                <Text style={{ fontWeight: 'bold' }}>
                    {contact.givenName} {contact.familyName}
                </Text>
                {
                    contact.phoneNumbers.map((phone, index) => (
                        <Text
                            key={index}
                        >{phone.label} : {phone.number}</Text>
                    ))
                }
            </View>
        )
    }
    useEffect(() => {
        if (!Platform.OS == "ios") {
            PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
                {
                    'title': 'Contacts',
                    'message': 'This app would like to view your contacts.',
                    'buttonPositive': 'Please accept bare mortal'
                }
            )
                .then(response => {
                    if (response == "granted") {
                        Contacts.getAll().then(res =>
                            setContacts(res)
                        )
                    }

                })
        } else {
            Contacts.getAll().then(response => {
                setContacts(response)
                console.log('response: ', response);
            })
        }
    }, [])
    return (
        <SafeAreaView style={styles.main}>
            
            <FlatList
                data={contacts}
                renderItem={(item) => renderItem(item.item)}
            />
        </SafeAreaView>
    )
}

export default Profile;