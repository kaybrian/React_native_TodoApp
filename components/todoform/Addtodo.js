import React,{useState} from 'react';
import { StyleSheet, Text,TextInput,Button, View } from 'react-native';


export default function AddTodo({ submitHander }){
    const [text,setText] = useState('');

    const changeHander = (val) =>{
        
        setText(val)
        
    };

    return (
        <View>
            <TextInput
            style={styles.input}
            placeholder="new Todo....."
            onChangeText={changeHander}
            />

            <Button 
            onPress={()=>submitHander(text)}
            title="Add a Todo item"
            color='coral'
            />

        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        padding:5,
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    }
})