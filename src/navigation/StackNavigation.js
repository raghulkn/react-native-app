import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screen/Home'
import Login from '../screen/Login'
import Register from '../screen/Register' 

const StackNavigation = () => {
    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name='home' component={Home}/>
        <Stack.Screen name='login' component={Login}/>
        <Stack.Screen name='register' component={Register}/>
    </Stack.Navigator>
  )
}

export default StackNavigation