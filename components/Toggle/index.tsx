import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
export type ToggleParams = {
  labelText?: string;
  active?: boolean;
};
const Toggle = ({ labelText, active }: ToggleParams) => {
  return (
    <View style={active ? styles.toggleActive : styles.toggleInactive}>
      <Text style={active ? styles.labelTextActive : styles.labelTextInactive}>
        {labelText}
      </Text>
      <View style={{ justifyContent: "center" }}>
        <AntDesign
          name="caretdown"
          size={12}
          color={active ? "white" : "black"}
        />
      </View>
    </View>
  );
};

export default Toggle;
