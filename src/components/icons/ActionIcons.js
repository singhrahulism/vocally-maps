import React from 'react'
import { Text, View, StyleSheet, StatusBar, Dimensions, Image, TouchableOpacity, Modal } from 'react-native'
import { Feather } from '@expo/vector-icons';

const SIZE = 40

const ActionIcons = () => {

    return <View style={styles.container}>
        <TouchableOpacity
            style={styles.actionIconContainer}
            activeOpacity={0.65}
        >
            <Image
                source={require('../../../assets/levels.png')}
                style={styles.imageContainer}
            />
        </TouchableOpacity>
        <View
            style={styles.actionIconContainer}
            activeOpacity={0.65}
        >
            <Feather name="navigation" size={22} color="black" />
        </View>
        <TouchableOpacity
            style={styles.actionIconContainer}
            activeOpacity={0.65}
        >
            <Image
                source={require('../../../assets/levels.png')}
                style={styles.imageContainer}
            />
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container: {
        // borderColor: 'red',
        // borderWidth: 1,
        position: 'absolute',
        marginTop: StatusBar.currentHeight+100,
        zIndex: 1,
        alignSelf: 'flex-end',
        right: Dimensions.get('window').width*0.05
    },
    actionIconContainer: {
        height: SIZE,
        width: SIZE,
        backgroundColor: 'white',
        borderRadius: SIZE / 2,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        marginBottom: 10
    },
    imageContainer: {
        height: 20,
        width: 'auto',
        aspectRatio: 1
    }
})

export default ActionIcons ;