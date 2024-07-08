import { View,Text, FlatList,Image,StyleSheet } from "react-native"
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from "react";
import { Chip, Dialog, FAB } from "@rneui/themed";

export default function Details(){
    const [dataSource, setDataSource] = useState([{id:1,name:'test',price:0,src:'https://www.mediastorehouse.com/p/191/sunset-porthmeor-beach-st-ives-cornwall-11702500.jpg.webp'}]);
    const [visible,setVisibility] = useState(false);
    const [visible1, setVisible1] = useState(false);
    const { item } = useLocalSearchParams();

    const images = [
        {
            src:'https://www.mediastorehouse.com/p/191/sunset-porthmeor-beach-st-ives-cornwall-11702500.jpg.webp',
            name:'Prawn',
            price:229
        },
        {
            src:'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            name: 'sardin',
            price:399
        },
        {
            src:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Half_Dome_from_Glacier_Point%2C_Yosemite_NP_-_Diliff.jpg/320px-Half_Dome_from_Glacier_Point%2C_Yosemite_NP_-_Diliff.jpg',
            name:'Hilsa',
            price:599
        },
        {
            src:'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
            name:'Squid',
            price:799
        }
    ]
    const showCheckout = () =>{
       setVisibility(true)
    }
    const showModal = () =>{
        setVisible1(!visible1);
        setVisibility(false)
    }
    const backDropPress = () =>{
        setVisible1(!visible1);
        router.push('/')
    }
    useEffect(()=>{
        let items = images.map((v,i)=>{
            return{
                id:i,
                src:v.src,
                name:v.name,
                price:v.price
            }
        })
        setDataSource(items)
    },[])
    return(
        <View>
            <Text style={{fontWeight:'bold',padding:8,textAlign:"center",textDecorationLine: 'underline',textDecorationColor:'#2e8943'}}>
                Result for {item}
            </Text>

            <FlatList
                data = {dataSource}
                renderItem={({item})=>(
                    <View style={{flex: 1,
                        flexDirection: 'column',
                        margin: 1,padding:12}}>
                        <Image 
                            style={{justifyContent:'center',alignItems:'center',height:100,padding:7}} source={{uri: item.src}} 
                        />
                        <Text>{item.name}</Text>
                        <Text>{item.price}</Text>
                        <Chip 
                            
                            title="+"
                            type='outline'
                            // numColumns={2}
                            containerStyle={{marginVertical:15}}
                            onPress={showCheckout}
                        />
                    </View>
                )}
                numColumns={2}
                // keyExtractor={(item, index) => index}
            />
            <FAB
                onPress={showModal}
                visible={visible}
                title="999 checkout"
                upperCase
                icon={{ name: 'shopping-cart-checkout', color: 'white' }}
            />

            <Dialog
            isVisible={visible1}
            onBackdropPress={backDropPress}
            >
            <Dialog.Title title="ORDER PLACED!!"/>
                <Text>Thank you for shopping with us.</Text>
            </Dialog>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        // alignItems:'center',
        // justifyContent:'center'
    }
})