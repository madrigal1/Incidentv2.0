import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";

import MapView from "react-native-maps";
import ProfilePicture from "../components/ProfilePicture";
import users from "../data/users";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ marginRight: 2 }}>
          <Text style={styles.subtitle}>Current Disaster Location</Text>
          <Text style={styles.title}>Chennai Floods</Text>
        </View>
        <ProfilePicture image={users[0].profilePic} size={50} />
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 12.9716,
          longitude: 77.5946,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  header: {
    position: "absolute",
    top: 70,
    left: 20,
    backgroundColor: "white",
    width: "90%",
    height: 100,
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  subtitle: {
    color: "#838282",
    fontSize: 14,
    fontWeight: "300",
  },
  title: {
    color: "black",
    fontSize: 36,
    marginTop: 10,
  },
});
