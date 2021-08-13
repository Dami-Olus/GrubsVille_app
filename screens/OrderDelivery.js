import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'

import {COLORS, FONTS, icons, SIZES, GOOGLE_API_KEY} from "../comstants"

function OrderDelivery({ route, navigation}) {

  const [food, setFood] = React.useState(null)
  const [streetName, setStreetName] = React.useState("")
  const [fromLocation, setFromLocation] = React.useState(null)
  const [toLocation, setToLocation] = React.useState(null)
  const [region, setRegion] = React.useState(null)

  React.useEffect(() => {
    let { food, currentLocation } = route.params;

    let fromLoc = currentLocation.gps
    let toLoc = food.location
    let street = currentLocation.streetName

    let mapRegion = {
      
      longitude: (fromLoc.longitude + toLoc.longitude) /2,
      latitude: (fromLoc.latitude + toLoc.latitude) / 2,
      latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
      longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2,
    }

    setFood(food)
    setStreetName(street)
    setFromLocation(fromLoc)
    setToLocation(toLoc)
    setRegion(mapRegion)
  }, [])
  
  function renderMap() {
    return (
      <View style ={{ flex: 1 }}>
        <MapView
          style={{ flex: 1}}
        >

        </MapView>

      </View>
    )
  }
  return (
    <View style={{ flex: 1}}>
      {renderMap()}
    </View>
  )
}

export default OrderDelivery
