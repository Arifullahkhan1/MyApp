import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet,View,FlatList,Text, Pressable, DeviceEventEmitter,TextInput} from 'react-native';
import { findAll,delet, upDate } from '../database/localdb';


const FlattList = ({inputList,setInputList}) => {
  const[newTitle, setNewTitle]=useState('')
  const nav = useNavigation()

  const navHandle=(todo)=>{
  nav.navigate('SelectedToDoScreen',{todo:todo})

  }
  DeviceEventEmitter.addListener("deletToDos", () => 
   findAll ()  
   .then(res=> setInputList(res))
)

//const { title, id, isCompleted } = route.params.todo
const newDelet =(id)=>{
   delet(id).then(()=> 
   findAll().then(res=> setInputList(res))
  )
  console.log(id);
} 
const chnageNewTile =(newTitle)=>{
  setNewTitle(newTitle)

}
const edit =(id,title)=>{

  upDate(id,newTitle).then(()=> 
   findAll().then(res=> setInputList(res))
  )
  console.log(newTitle);
}


   const renderHandle = ({item}) => {
      
        return (
        <Pressable onLongPress={()=>navHandle(item)}>
        <View style={styles.listView}>
          <View style={styles.todoShow}>
          <Text style={styles.listText}>{item.id}. </Text>
          <TextInput style={styles.list} onChangeText={chnageNewTile} >
             {item.title}
           </TextInput>
           </View>
           <View style={styles.pressBtn}>
          <Pressable style={styles.btnD} onPress={()=>newDelet(item.id)}>
  {({ pressed }) => (
      <Text style={styles.btndCol} >
        {pressed ? 'Deleted' : 'Delet'}
      </Text>
  )}
          </Pressable>
          <Pressable style={styles.btnS} onPress={()=>edit(item.id,item.title)}>
  {({ pressed }) => (
      <Text  >
        {pressed ? 'Done' : 'Save'}
      </Text>
  )}
          </Pressable>
          </View>
         
         </View>
         </Pressable>
         )};
     
    
      const keyHandler = (elm, index) => index;

     return (  <FlatList style={styles.flatList}
        data={inputList}
        renderItem={renderHandle}
        keyExtractor={keyHandler}
        />);
      
}
const styles = StyleSheet.create({
    flatList:{
        flex:1,
        width:'80%'
      },
      list:{
        
        marginTop:15,
        fontSize:25,
        fontFamily:'MacondoRegular',
         color:'blue'
      },
      listView:{
          
        flexDirection: "row",
        justifyContent: "space-between",
        
      }
      ,
      listText:{
       
        marginTop:15,
        fontSize:25,
        fontFamily:'MacondoRegular',
         color:'blue'
      },
      todoShow:{
      flexDirection:'row'  
      },
      pressBtn:{
        flexDirection:'row',
        marginTop:25,
       
      },
      btnD:{
        backgroundColor:'red',
        marginRight:10,
        padding:5,
        borderRadius:10,
        
      },
      btndCol:{
        color:'#fff',
        fontWeight:'bold'
        
      },
      btnS:{
        backgroundColor:'gold',
        marginRight:10,
        padding:5,
        borderRadius:10,
        
      },

})
export default FlattList;