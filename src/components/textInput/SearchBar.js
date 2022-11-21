import React, { useEffect, useState } from 'react'
import { View, StyleSheet, TextInput, Keyboard } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { getTheme } from '../theme/theme';
import SearchHistory from './SearchHistory';

const HEIGHT = 50

const SearchBar = () => {

    const [historyVisible, setHistoryVisible] = useState(false)
    const colorTheme = getTheme(useSelector(state => state.theme.value))

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => {
            setHistoryVisible(true)
        })
        Keyboard.addListener('keyboardDidHide', () => {
            setHistoryVisible(false)
        })
    })

    return <View style={styles.container}>
        <View style={[styles.subContainer, { backgroundColor: colorTheme.SEARCH_BAR_BACKGROUND}]}>
            <Ionicons
                name="md-search"
                size={24}
                color={colorTheme.SEARCH_BAR_ICON}
                style={{marginHorizontal: (HEIGHT - 24) / 2}}
            />
            <TextInput
                blurOnSubmit={Keyboard.dismiss}
                onFocus={() => setHistoryVisible(true)}
                style={[styles.searchInputContainer, { color: colorTheme.SEARCH_BAR_TEXT_INPUT}]}
                placeholderTextColor={colorTheme.SEARCH_BAR_TEXT_INPUT_PLACEHOLDER}
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
        marginTop: 30,
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