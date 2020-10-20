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
        fontSize: 25,
        fontWeight: 'bold',
        color: '#3e2723'
    }
})

const style_input = StyleSheet.create({
    container:{
        backgroundColor:'#9e9e9e',
        width: Dimensions.get('window').width * 0.70,
        height: Dimensions.get('window').height * 0.20,
        alignSelf: 'center',
        borderRadius: 10,
        
    },
    container_sub:{
        backgroundColor: 'white',
        borderRadius: 10,
        width: Dimensions.get('window').width * 0.60,
        height: Dimensions.get('window').height * 0.05,
        alignSelf: 'center',
        marginTop:10

        
    },
    text:{
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
        borderRadius: 10,
        padding:5,
        color:'white'
    },

    text_container:{
        backgroundColor: '#546e7a',
        marginVertical:25,
        marginHorizontal:50,
        borderRadius:20
        
    }

})

const card = StyleSheet.create ({
    container_sub:{
        backgroundColor:'#ffccbc',
        margin:10,
        padding:10,
        borderRadius:15,

        
    },
    text:{
        color: 'black',
        
        
    }

})

export {main, style_input, card}