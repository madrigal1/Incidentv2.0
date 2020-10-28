import { View, FlatList } from "react-native";
import React from "react";
import posts from "../../data/posts";

import Post from "../Post";

const Feed = () => (
  <View style={{ width: "100%", marginTop: 20, flex: 1 }}>
    <FlatList
      data={posts}
      renderItem={({ item }) => (
        <Post
          name={item.user.name}
          image={item.user.profilePic}
          description={item.desc}
        />
      )}
      keyExtractor={(item) => item._id}
    ></FlatList>
  </View>
);

export default Feed;
