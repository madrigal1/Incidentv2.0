import { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { RootStackParamList } from "../types";

import MapView from "react-native-maps";

export default function NewPostScreen({
  navigation,
}: StackScreenProps<RootStackParamList, "NewPost">) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>How do you wanna {"\n"}Help?</Text>
      </View>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.replace("Root")}
        style={styles.link}
      >
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  titleContainer: {
    marginTop: 50,
    width: "100%",
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
  map: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
