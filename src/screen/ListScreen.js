import React, {useState,useEffect} from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import firebase from "../../database/firebase";
import { ListItem, Avatar } from "react-native-elements";

const ListScreen = (props) => {
    
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        firebase.db.collection('users').onSnapshot(querySnapshot =>{
            const users=[]
            querySnapshot.docs.forEach(doc =>{
                console.log(doc.data())
                const {name, email, phone} = doc.data();
                users.push({
                    id:doc.id,
                    name,
                    email,
                    phone
                })
            });
            console.log("==========")
            console.log(users)
            console.log("==========")
            setUsers(users);
        });
    },[])

    return (
      <View>
        {
            users.map(user=>{
                return(
                    <Text>{user.name}</Text>
                )
            })
        }
      </View>
    );

    /*
    
        <ListItem 
            key={user.id}
            bottomDivider
            onPress={()=> {
                props.navigation.navigate("UserDetail",{
                    userId:user.id 
                });
                console.log("Detalles")
            }}
        >
            <ListItem.Chevron/>
            
            <Avatar rounded source={{uri:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}} />
            <ListItem.Content>
                <ListItem.Title>{user.name}</ListItem.Title>
                <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    
    */

};

const styles = StyleSheet.create({
    

});

export default ListScreen;