import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native'
import styles from './Profile.style'
import Contacts from 'react-native-contacts';

const Profile = () => {

    const [contacts, setContacts] = useState([]);

    const renderItem = (contact) => {
        return (
            <View style = {{marginBottom: 24}}>
                <Text style={{ fontWeight: 'bold' }}>
                    {contact.familyName} {contact.givenName}
                </Text>
                {
                    contact.phoneNumbers.map((phone,index) => (
                        <Text
                        key = {index}
                        >{phone.label} : {phone.number}</Text>
                    ))
                }
            </View>
        )
    }
    useEffect(() => {
        Contacts.getAll().then(response => {
            setContacts(response)
            console.log('response: ', response);
        })
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