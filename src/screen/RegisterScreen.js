import React, { useState } from "react";
import { View, StyleSheet,Text, Button,TextInput,ScrollView } from "react-native";
import firebase from "../../database/firebase";

const RegisterScreen = ({ navigation }) => {
    
    const [ state, setState ] = useState({
        name:'',
        email:'',
        phone:''
    });

    const handleChangeText = (name,value)=>{
        setState({...state,[name]:value})
    };

    const saveNewUser = async () => {
        if(state.name===''){
            alert('Ingresar el nombre')
        }else{
            try {
                console.log(state)
                await firebase.db.collection('users').add({
                     name:state.name,
                     email:state.email,
                     phone:state.phone
                 })
                 alert("Guardado")
            } catch (error) {
                console.log(error)
            }
         
        }
    }

    return (
      <ScrollView style={styles.container}>
          <View style={styles.inputGroup}>
              <TextInput 
                placeholder="Name User"
                onChangeText={(value)=>  handleChangeText('name',value) } />
                
          </View>

          <View style={styles.inputGroup}>
              <TextInput 
                placeholder="Email User" 
                onChangeText={(value)=>  handleChangeText('email',value) } />
          </View>

          <View style={styles.inputGroup}>
              <TextInput 
                placeholder="Phone User" 
                onChangeText={(value)=>  handleChangeText('phone',value) } />
          </View>

          <View style={styles.inputGroup}>
              <Button 
                title="Save User"
                onPress={()=> saveNewUser()} />
          </View>
      </ScrollView>
    );

    //Funcionando (se va a realizar una función) para hacer el siguiente trabajo
    //onChangeText={(value)=> setState({...state,name:value})}
    /*
        <View style={styles.container}>
            <Text>ContactScreen</Text>
        </View>
    */

};

const styles = StyleSheet.create({

  container:{
    flex: 1,
    padding:16,
    alignContent:'center',
  },
  
  inputGroup:{
      flex:1,
      padding:0,
      marginBottom:15,
      borderBottomWidth:1,
      borderBottomColor:'#cccccc'
  }

});

export default RegisterScreen;