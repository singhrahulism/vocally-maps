import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { history } from '../../data/searchHistory';
import SingleHistory from './SingleHistory';

const SearchHistory = ({ theme }) => {

    return <View style={[styles.container, {backgroundColor: theme ? '#3e3e3e' : 'white'}]}
            >
        <Text style={{marginBottom: 20, color: theme ? 'white' : 'black'}}>Recent</Text>
        {
            history.map((search, index) => {
                return <SingleHistory title={search.title} key={index} theme={theme} />
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