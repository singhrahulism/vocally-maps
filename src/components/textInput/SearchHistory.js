import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux';
import { history } from '../../data/searchHistory';
import { getTheme } from '../theme/theme';
import SingleHistory from './SingleHistory';

const SearchHistory = () => {

    const colorTheme = getTheme(useSelector(state => state.theme.value))

    return <View style={[styles.container, {backgroundColor: colorTheme.SEARCH_HISTORY_BACKGROUND}]}
            >
        <Text style={{marginBottom: 20, color: colorTheme.SEARCH_HISTORY_TITLE}}>Recent</Text>
        {
            history.map((search, index) => {
                return <SingleHistory title={search.title} key={index} />
            })
        }
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
    }
})

export default SearchHistory ;