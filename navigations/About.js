import { StatusBar } from "expo-status-bar";
import { View, Text,StyleSheet,Dimensions,ImageBackground,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from "react-native-safe-area-context";
import { FontDisplay } from "expo-font";


const About = () => {
    const nav = useNavigation();
  return (
    <SafeAreaView style={styles.contanir}>
    <StatusBar style="auto" />
  
       <View style={styles.listView}>
         <View>
         <Image
        style={styles.tinyLogo}
        source={require('../assets/about1.jpg')}
      />
    </View>
    <View>
      <Text style={styles.txt} >  About Me </Text>
    </View>
   
    <View style={styles.abouttxt}>
    <Text style={styles.txtabout1}>   
        A designor who love to bild simple and Beautiful thini
          designor who love to bild simple and Beautiful things.
          designor who love to bild simple and Beautiful things.
          designor who love to bild simple and Beautiful things.
          designor who love to bild simple and Beautiful things.
          designor who love to bild simple and Beautiful things.
          designor who love to bild simple and Beautiful things.
          designor who love to bild simple and Beautiful things.
          designor who love to bild simple and Beautiful things.
          designor who love to bild simple and Beautiful things.
          designor who love to bild simple and Beautiful things.
    
    </Text>
    </View>
        
        </View>
     
    </SafeAreaView >
  )
}
const styles = StyleSheet.create({
    contanir:{
       flex: 1,
       alignItems:'center',
       justifyContent:'center',
       backgroundColor:'#154b72'
},

  list:{
    marginTop:15,
    fontSize:25,
    fontFamily:'MacondoRegular',
     color:'blue',
     marginTop:100,
     marginLeft:30
  },
  listView:{
     justifyContent:'flex-start',
    alignContent:'flex-start',
  },
  tinyLogo:{
    
    width:Dimensions.get('window').width,
    height:218,
    marginBottom:380
    },
    txt:{
      marginTop:-300,
      color:'#fff',
      fontSize:25,
      fontWeight:'bold',
      marginLeft:120
    },
    txtabout:{
      marginTop:-250,
      color:'#fff'
    },
    txtabout1:{
      marginTop:-230,
      color:'#fff',
      },
      abouttxt:{
        flex:1,
        marginLeft:20
      }

})

export default About