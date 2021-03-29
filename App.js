import * as React from "react";
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import MyTeam from "./Screen/MyTeam";
import Photo from "./Screen/PhotoGallery";
import Viedo from "./Screen/ViedoGallery";
import Cateror from "./Screen/Catering";
import Decorator from "./Screen/Decorator";
import Login from "./Screen/Login";
import PhotoGallery from "./Screen/PhotoGallery";
import ViedoGallery from "./Screen/ViedoGallery";
import Photographer from "./Screen/Photographer";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigatorCD = createBottomTabNavigator({
  Cateror: {
    screen: Cateror,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("./image.webp")}
          style={{ width: 30, height: 30 }}
        ></Image>
      ),
    },
  },
  Decorator: {
    screen: Decorator,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("./image2.jpeg")}
          style={{ width: 30, height: 30 }}
        ></Image>
      ),
    },
  },
  Photographer: {
    screen: Photographer,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("./original.jpg")}
          style={{ width: 30, height: 30 }}
        ></Image>
      ),
    },
  },
});

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: MyTeam,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("./Homebutt.png")}
          style={{ width: 30, height: 30 }}
        ></Image>
      ),
    },
  },
  PhotoGallery: {
    screen: Photo,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("./original.jpg")}
          style={{ width: 30, height: 30 }}
        ></Image>
      ),
    },
  },
  ViedoGallery: {
    screen: Viedo,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("./video.png")}
          style={{ width: 30, height: 30 }}
        ></Image>
      ),
    },
  },
});
const StackNavigator = createStackNavigator({
  PYP: {
    screen: MyTeam,
    navigationOptions: {
      headerShown: false,
    },
  },
  CD: {
    screen: AppNavigatorCD,
    navigationOptions: {
      headerShown: true,
    },
  },
});
const SwitchNavigator = createSwitchNavigator({
  Login: { screen: Login },
  AppNav: { screen: AppNavigator },
  Stack: { screen: StackNavigator },
});

const AppContainer = createAppContainer(SwitchNavigator);
