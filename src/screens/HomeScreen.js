import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import { useSelector } from 'react-redux'
import MapView, { Marker } from 'react-native-maps'
import { mapMarkers } from '../data/mapMarkers'
import { getTheme } from '../components/theme/theme'
import Footer from '../components/footers/Footer'
import ActionIcons from '../components/icons/ActionIcons'
import SearchBar from '../components/textInput/SearchBar'
import BottomCard from '../components/cards/BottomCard'

const HomeScreen = () => {

    const theme = useSelector(state => state.theme.value)
    const colorTheme = getTheme(theme)

    return <View style={styles.container} >
        <StatusBar
            barStyle={'light-content'}
        />
        <SearchBar/>
        <ActionIcons />
        <MapView
            style={styles.mapContainer}
            initialRegion={{
                latitude: 28.4089,
                longitude: 77.3178,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            customMapStyle={colorTheme.MAP_STYLE}
        >
            {
                mapMarkers.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={marker.latlan}
                        title={marker.title}
                        description={marker.description}
                        image={theme ? marker.imageDark : marker.image}
                    />     
                ))
            }
        </MapView>
        <BottomCard />
        <Footer />
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