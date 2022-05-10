import React from 'react'
import { Text, View, Button } from 'react-native'
import auth from '@react-native-firebase/auth'

const Home = ({navigation}) => {
    const onPressHandler = () => {
        navigation.navigate('login')
    }
    // const user = auth().onAuthStateChange()
  return (
    <View>
        <Text>
            Home
        </Text>
        {/* <Text>{JSON.stringify(user)}</Text> */}
        <Button
        onPress={onPressHandler}
        title="Login"
        />
    </View>
  )
}

export default Home