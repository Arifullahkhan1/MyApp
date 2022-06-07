import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Pressable,
  Button,
  DeviceEventEmitter,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { delet } from '../database/localdb';

export default function SelectedTodoSceen({ route }) {
  const nav = useNavigation();
  //console.log(route.params.todo)
  const { title, id, isCompleted } = route.params.todo; // destructued

  const deletHandle = () => {
    delet(id).then(() => DeviceEventEmitter.emit("deletToDos"))
    nav.goBack();
  };
  

  return (
    <View style={styles.contanir}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../assets/nice.jpg")}
        resizeMode="cover"
        style={styles.img}
      >
        <View style={styles.listView}>
          <View style={styles.slectBtn}>
          <Text style={styles.list}>
            {id}.{title}
          </Text>

          <Pressable style={styles.btn} onPress={deletHandle}>
            <Text>X</Text>
          </Pressable>
          </View>
          <Pressable
            style={{
              padding: 5,
              backgroundColor: "green",
              width: 55,
              height: 30,
              marginTop: 350,
              borderRadius: 7,
              marginLeft: 290,
            }}
            onPress={() => nav.goBack()}
          >
            <Text style={{ color: "#fff", fontSize: 15, marginLeft: 5 }}>
              Back
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  contanir: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    position: "absolute",
    left: 0,
    bottom: 0,
  },
  list: {
    marginTop: 15,
    fontSize: 25,
    fontFamily: "MacondoRegular",
    color: "blue",
    marginTop: 100,
    marginLeft: 30,
  },
  listView: {

    justifyContent: "flex-start",
    alignContent: "flex-start",
    marginTop:50
  },
  btn: {
    backgroundColor: "red",
    marginTop: 105,
    marginLeft:25,
   
    borderRadius: 5,
    width: 30,
    height: 25,
    justifyContent: "center",
    alignItems: "center",

    color: "#fff",
  },
  slectBtn:{
    flexDirection:'row'
  }
});
