import React, { useState } from 'react'
import { Text, View, StyleSheet, StatusBar } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { useSelector } from 'react-redux'
import Footer from '../components/footers/Footer'
import ActionIcons from '../components/icons/ActionIcons'
import SearchBar from '../components/textInput/SearchBar'
import { mapMarkers } from '../data/mapMarkers'

const HomeScreen = () => {

    const mapLabel = useSelector(state => state.label.value)

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
            customMapStyle={[{
                elementType: 'labels',
                stylers: [{
                    visibility: mapLabel ? 'on' : 'off'
                }]
            }]}
        >
            {
                mapMarkers.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={marker.latlan}
                        title={marker.title}
                        description={marker.description}
                        image={marker.image}
                    />     
                ))
            }
        {/* <Marker
            coordinate={{ latitude: 28.3844451, longitude: 77.312646 }}
            title={'Raddison Blu'}
            description={'Raddison BLue Hotel'}
            image={require('../../assets/mapMarkers/restaurantMarker.png')}
        /> */}
        </MapView>
        {/* <Text style={{color: 'red', fontSize: 50}}>hibro</Text> */}
        <Footer />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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