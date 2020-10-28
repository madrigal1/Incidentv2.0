import React from "react";
import { Image } from "react-native";

export type ProfilePictureParams = {
  image?: string;
  size?: number;
};
const ProfilePicture = ({ image, size = 50 }: ProfilePictureParams) => {
  return (
    <Image
      source={{ uri: image }}
      style={{ width: size, height: size, borderRadius: size }}
    />
  );
};

export default ProfilePicture;
