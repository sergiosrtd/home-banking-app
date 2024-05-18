import { StyleSheet, View, Image } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { RegularText, SemiBoldText } from "./StyledText";
import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";
const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerLeft}>
        <View style={styles.profilePictureContainer}>
          <Image
            style={styles.profilePicture}
            source={require("@/assets/images/profile-photo.jpeg")}
          />
          <View style={styles.notificationIndicator} />
        </View>
        <RegularText style={styles.greeting}>
          Hola, <SemiBoldText>Sergio</SemiBoldText>
        </RegularText>
      </View>
      <Link href="/sign-in" style={styles.headerRight}>
        <Entypo name="menu" size={24} color={"white"} />
      </Link>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 130,
    backgroundColor: Colors.light.background,
    paddingHorizontal: 38,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLeft: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  headerRight: {},
  greeting: {
    fontSize: 20,
  },
  profilePictureContainer: {
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  profilePicture: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    objectFit: "cover",
  },
  notificationIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.light.primary,
    position: "absolute",
    right: 2,
  },
});
