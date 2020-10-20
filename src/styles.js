import {StyleSheet,Dimensions} from 'react-native';


const main = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#d7ccc8"
    },
    container_sub:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        padding:10,

    }, 
    text_1:{
        fontSize: 40,
        fontWeight: 'bold',
        color: '#3e2723'
    },
    text_2:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3e2723'
    }
})

const style_input = StyleSheet.create({
    container:{
        backgroundColor:'#ff5722',
        width: Dimensions.get('window').width * 0.70,
        height: Dimensions.get('window').height * 0.20,
        alignSelf: 'center',
        
    },
    container_sub:{
        backgroundColor: '#ffccbc'
    },
    text:{
        fontSize: 20,
        textAlign: 'center',
        padding: 30
    }

})

const card = StyleSheet.create ({
    container_sub:{
        backgroundColor:'red'
        
    },
    text:{
        color: 'black',
        
    }

})

export {main, style_input, card}