import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  postContainer: {
    width: "93%",
    flexDirection: "column",
    //backgroundColor: "grey",
    paddingHorizontal: 0,
    marginHorizontal: 13,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  postHeader: {
    width: "100%",
    flexDirection: "row",
    //backgroundColor: "red",
    justifyContent: "space-between",
    alignItems: "center",
  },
  description: { width: "100%", marginLeft: 4, marginTop: 10 },
  footer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    paddingHorizontal: 5,
  },
  actionBtn: {},
  actionBtnTxt: { color: "#1874E9" },
});

export default styles;
