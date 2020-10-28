import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
const ResourceToggle = () => {
  return (
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
        <MaterialCommunityIcons name="hospital-box" size={30} color="#C4C4C4" />
        <Text style={styles.resourceLabel}>Medicine</Text>
      </View>
    </View>
  );
};

export default ResourceToggle;
