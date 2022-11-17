import React, { useRef, useState } from 'react'
import { Text, View, StyleSheet, StatusBar, TextInput, Keyboard } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import SearchHistory from './SearchHistory';

const HEIGHT = 50

const SearchBar = () => {

    const [historyVisible, setHistoryVisible] = useState(false)

    return <View style={styles.container}>
        <View style={styles.subContainer}>
            <Ionicons
                name="md-search"
                size={24}
                color="black"
                style={{marginHorizontal: (HEIGHT - 24) / 2}}
            />
            <TextInput
                blurOnSubmit={Keyboard.dismiss}
                onFocus={() => setHistoryVisible(true)}
                style={styles.searchInputContainer}
                placeholder={'Search here'}
                onSubmitEditing={() => {
                    Keyboard.dismiss()
                    setHistoryVisible(false)
                }}
            />
        </View>
        {
            historyVisible
            ? <SearchHistory />
            : null
        }
    </View>
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        alignItems: 'center',
        marginTop: StatusBar.currentHeight+30,
        zIndex: 1,
        width: '90%',
        alignSelf: 'center',
    },
    subContainer: {
        flexDirection: 'row',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: HEIGHT,
        backgroundColor: 'white',
        borderRadius: 60 / 6,
        elevation: 5,
    },
    searchInputContainer: {
        flex: 1,
        height: '100%',
        marginRight: 20,
        fontWeight: 'bold',
    }
})

export default SearchBar ;