import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Dimensions, View } from "react-native";
import { useFonts } from "expo-font";
import Headers from "../compunents/Headers";
import TodoInput from "../compunents/TodoInput";
import FlattList from "../compunents/FlattList";
import { findAll } from "../database/localdb";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TodosScreen({dbInitilized}) {
  const [inputList, setInputList] = useState([]);
  useEffect(()=>{
   
    findAll()

    .then(res=>setInputList(res))
     
  },[dbInitilized])
  const [loaded] = useFonts({
    MacondoRegular: require("../assets/font/Macondo-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
     <SafeAreaView style={styles.container}>
       <StatusBar style="auto" />
      <ImageBackground
        source={require("../assets/nice2.jpg")}
        resizeMode='cover'
        style={styles.img}>
       <Headers />
        <TodoInput setInputList={setInputList} />
        <FlattList inputList={inputList} setInputList={setInputList}  />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   alignItems: "center",
  },
  img:{
    width:Dimensions.get('screen').width,
    height: Dimensions.get('screen').height, 
    position: 'absolute',
   /*  left:0,
    bottom: 0 */
    
  }
});
