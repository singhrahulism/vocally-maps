import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';

const SingleHistory = ({ title }) => {
    return <View style={styles.container}>
        <Feather
            name="clock"
            size={24}
            color="black"
            style={{marginLeft: 5, marginRight: 15}}
        />
        <Text
            style={{
                // borderBottomColor: '#3a3b3f',
                // borderBottomWidth: 1,
                // flex: 1
        }}>
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