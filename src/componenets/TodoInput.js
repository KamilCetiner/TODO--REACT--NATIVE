import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native'


import {style_input} from '../styles'


const TodoInput = (props) =>{

    const [userText, setText] = useState('')


    return(
        <View style={style_input.container}>
            
            <View style={style_input.container_sub}>
                <TextInput
                placeholder='Please write anything to do'
                onChangeText={ value => setText(value) }
                />

            </View>

            <TouchableOpacity 
            style={style_input.touch}
            onPress={() => props.onTodo(userText)}
            
            
            >
                <Text style={style_input.text}> ADD TODO </Text>
            </TouchableOpacity>

        </View>
    )
}

export {TodoInput}