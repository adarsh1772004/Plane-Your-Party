import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { ListItem } from "react-native-elements";
import Header from '../components/Header';
export default class BookDonateScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCaterers: [],
      input: "",
    };
  }
  getDetails = async () => {
    console.log("ho");
    var link =
      "https://vidhiagarwal1712.github.io/mylinkew/" +
      this.state.input +
      ".json";
    return fetch(link)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          allCaterers: responseJson,
        });
      });
  };

  render() {
    console.log(this.state.allCaterers);
    return (
      <View style={styles.container}>
         <Header />
         <Image
          source={require("../cate.jpg")}
          style={styles.backgroundImg}
        ></Image>
        <View style={styles.subContainer}>
        <TextInput
          style={styles.inputBox}
          value={this.state.input}
          placeholder="Search Cateres"
          onChangeText={(txt) => {
            this.setState({
              input: txt,
            });
          }}
        ></TextInput>

        <TouchableOpacity
          style={[styles.button,{marginLeft:20, marginTop:30}]}
          onPress={() => {
            this.getDetails();
          }}
        >
          <Text> Search</Text>
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          {this.state.allCaterers.length === 0 ? (
            <View style={styles.subContainer}>
              <Text style={{ fontSize: 20 }}>List Of All Cateres</Text>
            </View>
          ) : (
            
            <FlatList
              data={this.state.allCaterers}
              renderItem={({ item }) => (
                <View style = {styles.fcontainer}>
                <View style={{ borderBottomWidth: 2 }}>
                  <Text>{"Id: " + item.id}</Text>
                  <Text>{"Name: " + item.name}</Text>
                  <Text>{"charges: " + item.charges}</Text>
                </View>
                <View>
                  <TouchableOpacity style={styles.button}>
                    <Text>
                      Book
                    </Text>
                  </TouchableOpacity>
                </View>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
        </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
  },
  backgroundImg:{
    flex:1,
    resizeMode:'cover'
  },
  inputBox: {
    backgroundColor: "white",
    marginTop: 100,
    width: 250,
    height: 35,
    marginLeft: 10,
    borderWidth: 2,
    borderRadius: 20,
    textAlign: "center",
  },
  subContainer: {
    flex: 1,
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    position:"absolute",
    top:0,
    bottom:0,
    left:0,
    right:0
  },
  button: {
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff5722",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
  fcontainer: 
  {
    flex:1,
    flexDirection:"row",
    justifyContent:"space-around", 
    marginTop:40,
  }
});
