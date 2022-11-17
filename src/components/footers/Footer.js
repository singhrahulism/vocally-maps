import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import ActionButton from '../buttons/ActionButton';

const Footer = () => {

    const theme = useSelector(state => state.theme.value)

    console.log('theme: ', theme)

    return <View style={styles.container}>
        <View style={[styles.container, { flexDirection: 'row' }]}>
            <View style={styles.iconContainer}>
                <Ionicons name="ios-compass-outline" size={28} color="black" />
            </View>
            <View style={styles.iconContainer}>
                <Ionicons name="ios-map" size={24} color="black" />
            </View>
            <View style={styles.iconContainer} />
            <View style={styles.iconContainer}>
                <Ionicons name="notifications-outline" size={24} color="black" />
            </View>
            <View style={styles.iconContainer}>
                <FontAwesome5 name="user" size={20} color="black" />
            </View>
        </View>
        <ActionButton />
    </View>
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        height: 50,
        width: '100%',
        borderTopColor: '#e0e0e0',
        borderTopWidth: 1
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Footer ;