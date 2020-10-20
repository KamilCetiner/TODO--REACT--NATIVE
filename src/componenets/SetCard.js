import React from 'react';
import {View,Text, TouchableOpacity} from 'react-native';

import {card} from '../styles'

const SetCard =(props) => {
    return(
        <View style={card.container}>

            <TouchableOpacity 
            style={card.container_sub}
            onPress={() => props.onDone()}
            
            
            >


            <Text style={[card.text, { textDecorationLine : props.data.isDone ? 'line-through' : null }
            ]}>{props.data.todo}</Text>
            </TouchableOpacity>
            

        </View>
    )
}

export {SetCard};