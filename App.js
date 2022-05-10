import React, {useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './src/navigation/StackNavigation'
import firebaseInstance from './src/firebase/firebaseManager'

const App = () => {
  firebaseInstance.instance()
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  )
}

export default App