import React, { useState } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';


import {main} from './styles'
import {TodoInput} from './componenets'
import {SetCard} from './componenets'



const App = () => {

    const [list, setList] = useState([])

        const addTodo =(text) => {
            const element = {
                id : list.length,
                todo : text,
                isDone : false
            }

            const newArray = [element, ...list]
            setList(newArray)
        }


        const doneTodo = (todoId) => {
            const Array = [...list]
            const todoIndex = list.findIndex(t => t.id == todoId)

            Array[todoIndex].isDone = !Array[todoIndex].isDone
            setList(Array);

            
        }

        const renderItemData =({item})=>{
            return(
                <SetCard
                data={item}
                onDone={()=> doneTodo(item.id) }
                
                />
            )
        }


    return(
        <SafeAreaView style={main.container } >

            <View style={main.container_sub } >
                <Text style={main.text_1}>TODO</Text>
                <Text style={main.text_2}>10</Text>
            </View>

            <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={list}
            renderItem={renderItemData}


            />

            <TodoInput

            
            onTodo={(todoText)=> addTodo(todoText)}
            
            
            />
            

        </SafeAreaView>
    )
}

export default App;