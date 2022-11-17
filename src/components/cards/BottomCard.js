import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

const BottomCard = ({ theme }) => {
    return <View style={[styles.container, { backgroundColor: theme ? '#333333' : 'white' }]}>
        <View style={styles.imageContainer}>
            <Image
                source={require('../../../assets/placeHolder.jpg')}
                style={{height: '100%', width: 'auto', aspectRatio: 1, borderRadius: 10}}
            />
        </View>
        <View style={styles.infoContainer}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: theme ? 'white' : 'black'}}>Lokål Hamburk</Text>
            <Text style={{color: theme ? '#828282' : 'black'}}>Pub in Prague</Text>
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