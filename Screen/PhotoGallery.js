import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet,Image } from 'react-native';
import Header from '../components/Header';

class Photo extends React.Component {
  render() {
    return (
      <View>
        <Header />
        
          
          <Image
          source={require("../1-16.jpg")}
          style={{ width: 360, height: 170 }}
        ></Image>
        <Image
          source={require("../123.jpg")}
          style={{ width: 360, height: 170 }}
        ></Image>
        <Image
          source={require("../541.jpg")}
          style={{ width: 360, height: 170 }}
        ></Image>
        <Image
          source={require("../hea.jpg")}
          style={{ width: 360, height: 170 }}
        ></Image>
      </View>
    );
  }
}
const styling = StyleSheet.create({
  button: {
    marginTop: 90,
    marginLeft: 70,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    width: 200,
    height: 50,
    justifyContent: 'center',
    borderRadius: 20,
  },
});
export default Photo;
