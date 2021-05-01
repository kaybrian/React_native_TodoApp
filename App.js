import { StatusBar } from 'expo-status-bar';
import React, {useReducer, useState} from 'react';
import { StyleSheet, Text, View,  FlatList, Alert, TouchableWithoutFeedback,Keyboard } from 'react-native';
import Header from './components/header/index';
import TodoItem from './components/toitem/TodoItem';
import AddTodo from './components/todoform/Addtodo';

export default function App() {
    const [todo,setTodo] = useState([
      {text:'buy tea', key:'1'},
      {text:'Create an app', key:'2'},
      {text:'buy a car', key:'3'},
      {text:'buy a laptop', key:'4'},
    ]);
    const pressHander = (key) =>{
      setTodo((prevTodos)=>{
        return prevTodos.filter(todo => todo.key != key)
      })
    }

     const submitHander = (text) =>{
       if(text.trim().length > 3){
        setTodo((prevTodos)=>{
          return [
            {text:text, key:Math.random().toString() },
            ...prevTodos
          ]
        })
       }else{
        Alert.alert('OOPS!',"ToDOS must be over 3 letters long",[
          {text:'understood'}
        ])
       }
     }


  return (
<TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
  <View style={styles.container}>
        
        {/* header component */}
        <Header />

        <View style={styles.content}>

          {/* todo form component */}
          <AddTodo  submitHander={submitHander} />

          <View style={styles.list}>
            <FlatList 
              data={todo}
              renderItem={({item})=>{
                return (
                  <View>
                    <TodoItem item={item} presshander={pressHander}/>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>
</TouchableWithoutFeedback>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  content:{
    padding:40,
    flex:1,

  },
  list:{
    marginTop:20,
    flex:1,
  }
});
