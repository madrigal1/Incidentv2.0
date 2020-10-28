import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ProfilePicture from "../components/ProfilePicture";
import Toggle from "../components/Toggle";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import users from "../data/users";

export default function ExploreScreen() {
  const [view, toggleView] = useState("list");
  const [role, setRole] = useState<string | number>("donor");
  const [noOfDonors, setDonors] = useState<number>(3);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.headerSubtitle}>Hey</Text>
          <Text style={styles.header}>How do you wanna {"\n"}help?</Text>
        </View>
        <View style={styles.profilePic}>
          <ProfilePicture image={users[0].profilePic} />
        </View>
      </View>
      <View style={styles.toggleContainer}>
        <View style={view === "list" ? styles.listActive : styles.listInactive}>
          <Text
            style={view === "list" ? styles.activeText : styles.inactiveText}
          >
            List
          </Text>
        </View>
        <View style={view === "map" ? styles.activeMap : styles.mapInactive}>
          <Text
            style={view === "map" ? styles.activeText : styles.inactiveText}
          >
            Map
          </Text>
        </View>
      </View>
      <View style={styles.optionsConatiner}>
        <View style={styles.toggleItemContainer}>
          <Toggle labelText={"Offer"} active={true} />
          <Toggle labelText={"For 1"} active={false} />
        </View>

        <Text style={styles.noOfDonors}>{noOfDonors} People offer to help</Text>
      </View>
      <View style={styles.resourceToggle}>
        <View style={styles.resourceItemActive}>
          <MaterialCommunityIcons
            name="water-outline"
            size={30}
            color="#1874e9"
          />
          <Text style={styles.resourceLabelActive}>Water</Text>
        </View>
        <View style={styles.resourceItem}>
          <MaterialCommunityIcons name="food" size={30} color="#C4C4C4" />

          <Text style={styles.resourceLabel}>Food</Text>
        </View>
        <View style={styles.resourceItem}>
          <FontAwesome5 name="bed" size={30} color="#C4C4C4" />
          <Text style={styles.resourceLabel}>Shelter</Text>
        </View>
        <View style={styles.resourceItem}>
          <MaterialCommunityIcons
            name="hospital-box"
            size={30}
            color="#C4C4C4"
          />
          <Text style={styles.resourceLabel}>Medicine</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "flex-start",
  },
  headerContainer: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    //backgroundColor: "red",
    fontWeight: "900",
  },
  header: {
    fontSize: 28,
  },
  headerSubtitle: {
    fontSize: 20,
  },
  profilePic: {
    marginTop: 4,
  },
  toggleContainer: {
    marginTop: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
    flexDirection: "row",
  },
  activeToggle: {
    backgroundColor: "#1874E9",
    color: "white",
  },
  inactiveToggle: {
    color: "#807B7B",
    fontWeight: "bold",
  },
  listInactive: {
    backgroundColor: "#F8F8F8",
    height: 33,
    width: 86,
    paddingHorizontal: 25,
    paddingVertical: 2,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  listActive: {
    backgroundColor: "#1874E9",
    height: 33,
    width: 86,
    paddingHorizontal: 25,
    paddingVertical: 2,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  mapInactive: {
    backgroundColor: "#F8F8F8",
    height: 33,
    width: 86,
    alignItems: "flex-end",
    paddingHorizontal: 25,
    paddingVertical: 2,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  inactiveText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#807B7B",
  },
  activeText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
  activeMap: {
    backgroundColor: "white",
    height: 33,
    width: 86,
    alignItems: "flex-end",
    paddingHorizontal: 25,
    paddingVertical: 2,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  optionsConatiner: {
    marginTop: 23,
    paddingHorizontal: 15,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  toggleItemContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  noOfDonors: {
    color: "#1874E9",
  },
  resourceToggle: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "red",
    marginTop: 28,
    paddingHorizontal: 35,
  },
  resourceItem: {
    alignItems: "center",
    justifyContent: "flex-end",
    height: 62,
    width: 62,
    paddingVertical: 3,
    paddingHorizontal: 2,
    // backgroundColor: "red",
    flexDirection: "column",
    borderRadius: 8,
    shadowColor: "#C4C4C4",
  },
  resourceItemActive: {
    alignItems: "center",
    justifyContent: "flex-end",
    height: 62,
    width: 62,
    paddingVertical: 3,
    paddingHorizontal: 2,
    // backgroundColor: "red",
    flexDirection: "column",
    shadowColor: "#C4C4C4",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  resourceLabel: {
    fontSize: 10,
    marginTop: 10,
    color: "#C4C4C4",
  },
  resourceLabelActive: {
    fontSize: 10,
    marginTop: 10,
    color: "black",
  },
});
