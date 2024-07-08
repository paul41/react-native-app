import { Icon, Avatar, Tooltip, lightColors } from "@rneui/themed";
import { Stack, router } from "expo-router";
import { useState } from "react";
import { View, TextInput, TouchableOpacity,StyleSheet,Text } from "react-native";

export default function RootLayout() {
  const [text,onChngTxt] = useState('');
  const routeToCatgItms = () =>{
    if(text.trim() === ""){  
        return(
            <Tooltip 
                visible={true}
                popover={<Text>Please enter the products to search</Text>}
                width={200}
                backgroundColor={lightColors.primary}
            />
        )
    }else{
        router.push(`/product-details/${text}`)
    }
  }
  return (
    <Stack screenOptions={{
      headerStyle: {
        backgroundColor: 'rgb(71 217 105)',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerLeft : () =>(
        <View>
          <Avatar
            size={40}
            rounded
            source={{ uri: "https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg" }}
          /> 
        </View>
      ),
      headerRight: () =>(
        <View style={{flexDirection:'row'}}>
            <TextInput 
                style={styles.searchInpt}
                onChangeText={onChngTxt}
                value={text}
                placeholder='Search products'
                
            /> 
            <TouchableOpacity activeOpacity={0.5} onPress={routeToCatgItms}>
                <Icon
                    style={styles.iconStt}
                    name ='search'
                    color='#fff'
                />
            </TouchableOpacity>
            
        </View>
    ),
      headerTitle:""
    }}>
      <Stack.Screen name="index"  />
      <Stack.Screen name="product-details"  />
    </Stack>
  );
}

const styles = StyleSheet.create({
  
  iconStt:{
      padding:5.5,
      backgroundColor:'#2e8943',
      borderBottomRightRadius:5,
      borderTopRightRadius:5,
      borderColor:'#2e8943',
      borderWidth:1,
  },
  searchInpt:{
    borderBottomLeftRadius:5,
    borderTopLeftRadius:5,
    borderWidth:1,
    borderColor:'#2e8943',
    backgroundColor:"#fff",
    padding:3,
    width:200
}
})