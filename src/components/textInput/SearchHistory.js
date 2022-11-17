import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { history } from '../../data/searchHistory';
import SingleHistory from './SingleHistory';

const SearchHistory = () => {

    return <View style={styles.container}
            >
        <Text style={{marginBottom: 20}}>Recent</Text>
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