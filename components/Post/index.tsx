import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ProfilePicture from "../ProfilePicture";
import styles from "./styles";

export type PostParams = {
  image: string;
  name: string;
  time?: string;
  description: string;
};

const Post = ({ image, name, time, description }: PostParams) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <View style={styles.userInfo}>
          <ProfilePicture image={image} size={45} />
          <Text style={{ marginLeft: 20, fontWeight: "bold" }}>{name}</Text>
        </View>
        <View>
          <Text>3mins ago</Text>
        </View>
      </View>
      <View style={styles.description}>
        <Text>{description}</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>SEE ON MAP</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>TAKE OFFER</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Post;
