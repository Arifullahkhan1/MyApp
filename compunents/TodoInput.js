import { StyleSheet,View,TextInput,Pressable,Text } from 'react-native';
import { useState } from "react";
import Todo from '../moduels/Todo';
import { findAll, insert } from '../database/localdb';


const TodoInput = ({setInputList})=>{
    const [text, setText] = useState("");
    const[count,setCount]=useState(1);
 

    const handleAdd = () => {
      if(text===''){
        alert('Empty Wish! Not Allowed')
      } else{
        const todo = new Todo(count,text,false)
        setCount((priv)=>priv+1);
       insert(todo)

       .then (res=>{console.log('Inserted',res)})
       return findAll()
       .then(res => setInputList(res),
        setText(""))}
    
      };
      const changeText = (text) => {
        setText(text);
        
      };
 return(
    <View style={styles.input}>
    <TextInput
      style={styles.textinput}
      onChangeText={changeText}
      value={text}
    />
  <Pressable style={styles.btn} onPress={handleAdd}>
  {({ pressed }) => (
      <Text >
        {pressed ? 'Added' : 'Add'}
      </Text>
  )}
  </Pressable>
  </View>
 )
}
const styles = StyleSheet.create({

    textinput: {
        backgroundColor: "lightgreen",
        width: "70%",
        marginHorizontal: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
        fontSize: 25,
      },
      input: {
        flexDirection: "row",
        justifyContent: "space-between",
      },
      btn:{
        backgroundColor:'pink',
        marginTop:3,
        borderRadius:5,
        width:70,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        marginRight:200
     
      },
     
      

})
export default TodoInput;