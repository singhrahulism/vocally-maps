import React from 'react'
import { View, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { useSelector } from 'react-redux'
import Footer from '../components/footers/Footer'
import ActionIcons from '../components/icons/ActionIcons'
import SearchBar from '../components/textInput/SearchBar'
import { mapMarkers } from '../data/mapMarkers'
import { darkMap } from '../data/darkMap'
import BottomCard from '../components/cards/BottomCard'

const HomeScreen = () => {

    const theme = useSelector(state => state.theme.value)

    return <View style={styles.container} >
        <SearchBar theme={theme} />
        <ActionIcons theme={theme} />
        <MapView
            style={styles.mapContainer}
            initialRegion={{
                latitude: 28.4089,
                longitude: 77.3178,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            customMapStyle={theme ? darkMap : []}
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
        </MapView>
        <BottomCard theme={theme} />
        <Footer theme={theme} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingBottom: 50
    },
    mapContainer: {
        height: '100%',
        marginBottom: -50
    }
})

export default HomeScreen ;