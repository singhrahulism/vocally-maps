import React from 'react'
import { View, StyleSheet, StatusBar, Dimensions, Image, TouchableOpacity, Modal } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/features/themeSlice';
import { getTheme } from '../theme/theme';

const SIZE = 40

const ActionIcons = () => {

    const colorTheme = getTheme(useSelector(state => state.theme.value))

    const dispatch = useDispatch()

    return <View style={styles.container}>
        <TouchableOpacity
            style={[styles.actionIconContainer, {backgroundColor: colorTheme.ACTION_ICON_BACKGROUND}]}
            activeOpacity={0.65}
            onPress={() => dispatch(toggleTheme())}
        >
            <Image
                source={colorTheme.ACTION_ICON_IMAGE}
                style={styles.imageContainer}
            />
        </TouchableOpacity>
        <View
            style={[styles.actionIconContainer, {backgroundColor: colorTheme.ACTION_ICON_BACKGROUND}]}
            activeOpacity={0.65}
        >
            <Feather name="navigation" size={22} color={colorTheme.ACTION_ICON_ICON} />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        marginTop: StatusBar.currentHeight+100,
        zIndex: 1,
        alignSelf: 'flex-end',
        right: Dimensions.get('window').width*0.05
    },
    actionIconContainer: {
        height: SIZE,
        width: SIZE,
        borderRadius: SIZE / 2,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        marginBottom: 10
    },
    imageContainer: {
        height: 20,
        width: 'auto',
        aspectRatio: 1
    }
})

export default ActionIcons ;