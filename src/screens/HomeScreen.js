import React from 'react'
import { Text, View, StyleSheet, StatusBar } from 'react-native'
import MapView from 'react-native-maps'
import Footer from '../components/footers/Footer'
import ActionIcons from '../components/icons/ActionIcons'
import SearchBar from '../components/textInput/SearchBar'

const HomeScreen = () => {
    return <View style={styles.container}>
        <SearchBar />
        <ActionIcons />
        <MapView
            style={styles.mapContainer}
            initialRegion={{
            latitude: 28.4089,
            longitude: 77.3178,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}
        >
        </MapView>
        <Text style={{color: 'red', fontSize: 50}}>hibro</Text>
        <Footer />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: 'red',
        borderWidth: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: 'white', // TODO THEME
        paddingBottom: 50
    },
    mapContainer: {
        height: '100%',
        marginBottom: -50
    }
})

export default HomeScreen ;