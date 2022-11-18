import React from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const BUTTON_WIDTH = Dimensions.get('window').width/7

const ActionButton = () => {
    return <View style={styles.container}>
        <View style={styles.actionButtonContainer}>
            <AntDesign name="plus" size={30} color="white" />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center'
    },
    actionButtonContainer: {
        height: BUTTON_WIDTH,
        width: BUTTON_WIDTH,
        borderRadius: BUTTON_WIDTH / 2,
        backgroundColor: '#fe3139',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: BUTTON_WIDTH / 2
    }
})

export default ActionButton ;