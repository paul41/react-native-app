import { Text, View,TextInput,SafeAreaView,StyleSheet,Image,ScrollView, Animated, ImageBackground, useWindowDimensions, FlatList, ActivityIndicator } from "react-native";
import { Stack,useRouter,useLocalSearchParams, Link } from 'expo-router';
import {Icon,Avatar,Tooltip,lightColors,FAB,Divider,ListItem} from '@rneui/themed';
import { HelloWave } from "@/components/HelloWave";
import { ExternalLink } from "@/components/ExternalLink";
import HomeScreen from "@/app-example/(tabs)";
import NotFoundScreen from "@/app-example/+not-found";
import { useRef, useState, useEffect } from "react";


export default function Index() {
  const images = [
    {
       src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
       width: 320,
       height: 174,
       isSelected: true,
       caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
       src: "https://jooinn.com/images/gold-fish-1.jpg",
       width: 320,
       height: 212,
       tags: [
          { value: "Ocean", title: "Ocean" },
          { value: "People", title: "People" },
       ],
       alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
       src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
       width: 320,
       height: 212,
       alt: "Boats (Jeshu John - designerspics.com)"
    },
    {
        src: "https://www.pixelstalk.net/wp-content/uploads/2016/04/Desktop-fish-wallpapers-HD-pictures-download.jpg",
        width: 320,
        height: 174,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)",
     },
     
     {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        width: 320,
        height: 212,
        alt: "Boats (Jeshu John - designerspics.com)"
     },
     {
        src: "https://th.bing.com/th/id/OIP.b5Jmzfr9Y4YwNGVBj2fqswHaFd?rs=1&pid=ImgDetMain",
        width: 320,
        height: 212,
        tags: [
           { value: "Ocean", title: "Ocean" },
           { value: "People", title: "People" },
        ],
        alt: "Boats (Jeshu John - designerspics.com)",
     },
     {
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        width: 320,
        height: 174,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)",
     },
     {
        src: "https://th.bing.com/th/id/OIP.RzQO7ixK9EnxLJIgSA8kBgHaDG?rs=1&pid=ImgDetMain",
        width: 320,
        height: 174,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)",
     },
     {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        width: 320,
        height: 174,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)",
     },
     {
        src: "https://th.bing.com/th/id/OIP.eFOnhhqUjixkF0uSVSjLVwHaE9?rs=1&pid=ImgDetMain",
        width: 320,
        height: 174,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)",
     },
     {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        width: 320,
        height: 174,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)",
     },
     {
        src: "https://i.pinimg.com/originals/43/79/b2/4379b2049e30ade6bdcdae40cabe90b6.jpg",
        width: 320,
        height: 174,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)",
     },
  ];
  const {width: windowWidth} = useWindowDimensions();
  const [dataSource, setDataSource] = useState([{src:'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg'}]);
  const scrollX = useRef(new Animated.Value(0)).current;
  const isLoading = true;
  const error = false;
  
  useEffect(()=>{
        let items = images.map((v,i)=>{
            return{
                id:i,
                src:v.src,
                caption:v.caption ? v.caption : v.alt
            }
        })
        setDataSource(items)
  },[])
  return (
    <View
      style={styles.container}
    >
      <ScrollView showsVerticalScrollIndicator={false}>

      {/* <Link href="details">View details</Link>
        <View>
        <HelloWave />
      </View> */}
      <ScrollView
            style={styles.scrollContainer}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={3}
            onScroll={Animated.event([
                {
                    nativeEvent: {
                        contentOffset: {
                            x: scrollX,
                        },
                    },
                },
            ],{useNativeDriver: false})}
        >
            
            {images.map((image, imageIndex) => {
                return (
                  <View key={imageIndex} style={{height:200,width:windowWidth}}>
                      <ImageBackground source={{uri: image.src}} style={styles.card}>
                          {/* <View style={styles.textContainer}>
                              <Text>
                                  {'Image - ' + imageIndex}
                              </Text>
                          </View> */}
                          
                      </ImageBackground>
                  </View>
                );
            })}
      </ScrollView>
      
      <Text style={{fontWeight:'bold',padding:8,textAlign:"center",textDecorationLine: 'underline',textDecorationColor:'#2e8943'}}>
            Shop by category
      </Text>
      <FlatList
            data={dataSource}
            renderItem={({item}) => (
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        margin: 1,
                        padding:5,
                    }}>
                    <Image
                        style={styles.imageThumbnail}
                        source={{uri: item.src}}
                    />
                    {/* <Text style={{position:'absolute',color:"#fff",background:"rgba(221,221,221,0.3)",bottom:0.1,padding:5}}>
                        <Text style={{color:"#fff",zIndex:1}}>
                            {item.caption?item.caption:item.alt}
                        </Text>
                    </Text> */}
                </View>
            )}
            //Setting the number of column
            numColumns={3}
            // keyExtractor={(item, index) => index}
        />
        <Text style={{fontWeight:'bold',padding:8,textAlign:"center",textDecorationLine: 'underline',textDecorationColor:'#2e8943'}}>
            Today's Deal
        </Text>
        {
            isLoading ? (
                <ActivityIndicator size='large' />
            ) : error ? (
                <Text>Something went wrong...</Text>
            ): (<Text>...</Text>)
        }
        <Image
          height={200}
          source={{
              uri: 'https://th.bing.com/th/id/R.31fd58cad4d19f07bc0eab92bedeaa32?rik=nS6NaEzdi9JWrA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-khyrsaQPGrQ%2fUrMZwUTyzzI%2fAAAAAAAAAJk%2fX4He4ebSKak%2fs1600%2fiojopokoip.jpg&ehk=srxysB6Hhy%2fuZNfW2IGQeV0pvxrhevCZShi8tKh0vdk%3d&risl=&pid=ImgRaw&r=0'
          }}
        />
        <Divider width={3}/>
        <View style={{flex:1,flexDirection:'row'}}>
          <ListItem.Title>Contact us | </ListItem.Title>
          <ListItem.Title>About us | </ListItem.Title>
          <ListItem.Title>Careers </ListItem.Title>
        </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  scrollContainer: {
    height: 250,
    paddingTop:10
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 10,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    borderRadius:2.5
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
})