import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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

export default styles;
