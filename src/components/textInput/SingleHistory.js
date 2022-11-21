import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { getTheme } from '../theme/theme';
import { useSelector } from 'react-redux';

const SingleHistory = ({ title }) => {

    const colorTheme = getTheme(useSelector(state => state.theme.value))

    return <View style={styles.container}>
        <Feather
            name="clock"
            size={24}
            color={colorTheme.SINGLE_HISTORY_ICON}
            style={{marginLeft: 5, marginRight: 15}}
        />
        <Text style={{color: colorTheme.SINGLE_HISTORY_TEXT}}>
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