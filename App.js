import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
   StyleSheet, 
   Text, 
   View, 
   SafeAreaView, 
   TouchableWithoutFeedback, 
   Image,
   TouchableNativeFeedback, 
   TouchableOpacity, 
   TouchableHighlight, 
   Button,
   Alert,
   Dimensions} from 'react-native';
   import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
   
   
   console.log(require("./assets/icon.png"));
   const noReally = () => {
     Alert.prompt("My Title", "My message", text => console.log(text));
     // Alert.alert("Button Tapped", "Was it?",[
       //   {text: "Yes", onPress: () => console.log("Yes")},
       //   {text: "No", onPress: () => console.log("No")}
       //]);
       console.log("you the man");
      }
  export default function App() {
    const {landscape} = useDeviceOrientation();

    
    {/* <Text>Hello World!</Text>
    {/* <Image source={require("./assets/icon.png")}/>
    <TouchableNativeFeedback onPress={() => console.log("Image Touched")}>
    <Image source={{
      width: 200,
      height: 300,
      uri: "https://picsum.photos/200/300"}}/>
      </TouchableNativeFeedback> */}
  return (
    <SafeAreaView style={styles.container}>
      {/* <Button title = "Click Me" onPress={noReally}/> */}
      <View style={[styles.containerStyles, landscape?styles.horizontal:styles.vertical]}
      ></View>
    </SafeAreaView>
  );
  }
const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      containerStyles : {
        backgroundColor: "dodgerblue",
      },
      horizontal: {
        width: "100%",
        height:"100%"
      },
      vertical: {
        width: "50%",
        height: "100%"
      }
    });
