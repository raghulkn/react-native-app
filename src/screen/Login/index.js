import React, { useState } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import firebaseInstance from '../../firebase/firebaseManager'
import CustomInput from '../../components/CustomInput'
const Login = ({navigation}) => {
    const initialData = () => ({
        email:'',
        password:''
    })
    const initialError = () => ({
        email:true,
        password:false
    })
    const [data, setData] = useState(initialData())
    const [isError, setError] = useState(initialError())
    const onSubmitHandler = () => {
        firebaseInstance.signIn(data.email, data.password)
        .then(data =>{
            console.log(data, "SignIn is Successful")
            navigation.navigate('home')
        }).catch(err => {
            console.log(err, "SignIn Failed")
        })
    }
    const onChangeTextHandler = (name, value) => {
        setData((data) => ({...data, [name]:value}))
    }
  return (
    <View style={{...styles.container}}>
        <Text style={{...styles.header}}>Login</Text>
        <CustomInput
        name="email"
        label="email"
        data={data.email}
        onChangeTextHandler={onChangeTextHandler}
        isError={isError.email}
        ErrorText="Invalid Email Try again !"
        />
        <CustomInput
        name="password"
        label="password"
        data={data.password}
        onChangeTextHandler={onChangeTextHandler}
        isError={isError.password}
        ErrorText="Invalid Email Try again !"
        />
        <View style={{...styles.button}}>
            <Button style={{...styles.button}} title="REGISTER" onPress={onSubmitHandler}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    header:{
        textAlign:'center',
        fontSize:24,
        padding:20
    },
    button:{
        marginHorizontal:40
    }
})

export default Login