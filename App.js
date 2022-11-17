import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Provider } from "react-redux"
import store from "./src/redux/store"

import HomeScreen from "./src/screens/HomeScreen"

const Stack = createNativeStackNavigator()

const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}