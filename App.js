import React from 'react'
import { createStackNavigator, CreateStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Tabs from './navigation/tabs'
import { Home, Restaurant, OrderDelivery, Food } from './screens'

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={''}>
        <Stack.Screen name='Tabs' component={Tabs} />
        <Stack.Screen name='Food' component={Food} />
        <Stack.Screen name='OrderDelivery' component={OrderDelivery} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
