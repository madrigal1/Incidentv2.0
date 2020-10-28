import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  postContainer: {
    width: "100%",
    flexDirection: "column",
    //backgroundColor: "grey",
    paddingHorizontal: 10,
    marginHorizontal: 4,
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
  description: { width: "100%", marginLeft: 4 },
  footer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionBtn: {},
  actionBtnTxt: {},
});

export default styles;
