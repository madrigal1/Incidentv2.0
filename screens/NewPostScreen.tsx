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
import ResourceToggle from "../components/resourceToggle";
import { TextInput } from "react-native-gesture-handler";

import { AntDesign } from "@expo/vector-icons";

export default function NewPostScreen({
  navigation,
}: StackScreenProps<RootStackParamList, "NewPost">) {
  const [desc, setDesc] = React.useState("");

  const onSubmit = () => {
    console.warn("Donation Intention Added !");
    navigation.navigate("Root");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>How do you wanna {"\n"}Help?</Text>
      </View>
      <View style={styles.mapContainer}>
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
      <View style={styles.form}>
        <ResourceToggle />
        <View style={styles.formItem}>
          <AntDesign name="pluscircle" size={24} color="black" />
          <TextInput
            value={desc}
            onChangeText={(value) => setDesc(value)}
            multiline={true}
            numberOfLines={3}
            style={styles.descInput}
            placeholder={"Click here to describe your dontaion here"}
          />
        </View>

        <TouchableOpacity onPress={onSubmit} style={styles.link}>
          <View style={styles.submit}>
            <Text style={styles.linkText}>Post New Donation Intent</Text>
          </View>
        </TouchableOpacity>
      </View>
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
    fontWeight: "bold",
    color: "white",
  },
  mapContainer: {
    position: "absolute",
    width: "100%",
    height: "42%",
    top: 120,
    left: 0,
    right: 0,
    bottom: 0,
  },
  map: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    bottom: 0,
  },
  form: {
    width: "100%",
    position: "absolute",
    top: 430,
    left: 0,
    right: 0,
    bottom: 0,
  },
  descInput: {
    // marginHorizontal: 20,
    color: "grey",
    height: 100,
    maxHeight: 300,
    fontSize: 10,
    marginLeft: 20,
  },
  formItem: {
    //backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  submit: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: -56,
    left: 0,
    width: "100%",
    height: 55,
    backgroundColor: "#1874E9",
  },
});
