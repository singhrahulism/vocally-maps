import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';

const SingleHistory = ({ title, theme }) => {
    return <View style={styles.container}>
        <Feather
            name="clock"
            size={24}
            color={theme ? 'white' : 'black'}
            style={{marginLeft: 5, marginRight: 15}}
        />
        <Text style={{color: theme ? 'white' : 'black'}}>
            {title}
        </Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 10
    }
})

export default SingleHistory ;