import React from 'react'
import { Text, View, StyleSheet, StatusBar, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const HEIGHT = 50

const SearchBar = () => {
    return <View style={styles.container}>
        <Ionicons
            name="md-search"
            size={24}
            color="black"
            style={{marginHorizontal: (HEIGHT - 24) / 2}}
        />
        <TextInput
            style={styles.searchInputContainer}
            placeholder={'Search here'}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: StatusBar.currentHeight+30,
        zIndex: 1,
        width: '90%',
        height: HEIGHT,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 60 / 6,
        elevation: 5,
    },
    searchInputContainer: {
        flex: 1,
        height: '100%',
        marginRight: 20,
        fontWeight: 'bold'
    }
})

export default SearchBar ;