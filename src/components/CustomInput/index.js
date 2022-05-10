import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const CustomInput = ({
    name,
    label,
    onChangeTextHandler,
    data,
    isError,
    ErrorText
}) => {
    const onChangeText = (value) => {
        onChangeTextHandler(name, value)
    }
  return (
    <View style={{...styles.viewContainer}}>
        <Text style={{...styles.text}}>{label}</Text>
        <TextInput
        style={{...styles.textInput}}
        onChangeText={onChangeText}
        value={data}
        />
        {isError && <Text style={{...styles.errorText}}>{ErrorText}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
    viewContainer: {
        padding:14
    },
    text:{
        color:'#000',
        textTransform:'capitalize'
    },
    textInput:{
        color:'black',
        fontSize:18,
        borderColor:'gray',
        borderBottomWidth:2
    },
    errorText:{
        color:'red'
    }
})

export default CustomInput