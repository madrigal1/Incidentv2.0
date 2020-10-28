import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  toggleActive: {
    flexDirection: "row",
    backgroundColor: "#1874E9",
    width: 75,
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: "space-between",
    borderRadius: 8,
    marginRight: 8,
  },
  toggleInactive: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: 75,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#1874E9",
    borderRadius: 8,
  },
  labelTextActive: { color: "white" },
  labelTextInactive: { color: "black" },
});

export default styles;
