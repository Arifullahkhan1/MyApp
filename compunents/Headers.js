import { Text, StyleSheet,View } from 'react-native';


const  Headers= ()=> {
  
    return (
        <View style={styles.container}>
       <Text style={styles.title}>My ToDos App</Text>
       </View>
   
  );
}
const styles = StyleSheet.create({
    title: {
        marginTop: 50,
        marginBottom: 10,
        fontSize: 30,
        fontFamily: "MacondoRegular",
      },
      container:{
          alignItems:'center'
      }
    
})
export default Headers;