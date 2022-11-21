import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { useSelector } from 'react-redux'
import { getTheme } from '../theme/theme'

const BottomCard = () => {

    const colorTheme = getTheme(useSelector(state => state.theme.value))

    return <View style={[styles.container, { backgroundColor: colorTheme.BOTTOM_CARD_BACKGROUND }]}>
        <View style={styles.imageContainer}>
            <Image
                source={require('../../../assets/placeHolder.jpg')}
                style={{height: '100%', width: 'auto', aspectRatio: 1, borderRadius: 10}}
            />
        </View>
        <View style={styles.infoContainer}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: colorTheme.BOTTOM_CARD_TITLE}}>Lokål Hamburk</Text>
            <Text style={{color: colorTheme.BOTTOM_CARD_SUBTITLE}}>Pub in Prague</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: '90%',
        borderRadius: 10,
        alignSelf: 'center',
        bottom: 100,
        padding: 10,
        flexDirection: 'row'
    },
    imageContainer: {
        height: 80,
        width: 80
    },
    infoContainer: {
        flex: 4,
        justifyContent: 'center',
        marginLeft: 10
    }
})

export default BottomCard ;