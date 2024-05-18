import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import { BoldText, RegularText } from "@/components/StyledText";
const SignIn = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={{ alignSelf: "center" }}
          source={require("@/assets/images/login-logo.png")}
        />
      </View>
      <View style={styles.loginContainer}>
        <Image
          style={styles.profilePhoto}
          source={require("@/assets/images/profile-photo.jpeg")}
        />
        <RegularText style={styles.greeting}>
          Hola, <BoldText style={styles.userName}>Sergio</BoldText>
        </RegularText>
        <TouchableOpacity
          onPress={() => router.push("/(tabs)/")}
          style={styles.loginButton}
        >
          <RegularText style={styles.loginButtonText}>
            Iniciar Sesión
          </RegularText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.changeUserLink}>
          <FontAwesome5
            style={styles.changeUserIcon}
            name="user-alt"
            size={16}
            color={Colors.light.text}
          />
          <RegularText style={styles.changeUserText}>
            Cambiar de usuario
          </RegularText>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomTab}>
        <TouchableOpacity style={styles.tabButtonContainer}>
          <View style={styles.tabButtonIconContainer}>
            <MaterialCommunityIcons
              name="safe-square-outline"
              size={24}
              color={Colors.light.text}
            />
          </View>
          <RegularText style={styles.tabButtonText}>Abrí tu cuenta</RegularText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButtonContainer}>
          <View style={styles.tabButtonIconContainer}>
            <Ionicons
              name="qr-code-sharp"
              size={24}
              color={Colors.light.text}
            />
          </View>
          <RegularText style={styles.tabButtonText}>QR</RegularText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButtonContainer}>
          <View style={styles.tabButtonIconContainer}>
            <MaterialCommunityIcons
              name="tag-text"
              size={24}
              color={Colors.light.text}
            />
          </View>
          <RegularText style={styles.tabButtonText}>Promociones</RegularText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButtonContainer}>
          <View style={styles.tabButtonIconContainer}>
            <FontAwesome5 name="whatsapp" size={24} color={Colors.light.text} />
          </View>
          <RegularText style={styles.tabButtonText}>Contactanos</RegularText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingHorizontal: 30,
    paddingVertical: 60,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  logoContainer: {
    width: "100%",
  },
  loginContainer: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    gap: 30,
  },
  profilePhoto: {
    width: 81,
    height: 81,
    borderRadius: 81 / 2,
  },
  greeting: {
    fontSize: 24,
    color: Colors.light.text,
  },
  userName: {
    fontWeight: "700",
  },
  loginButton: {
    width: "80%",
    backgroundColor: Colors.light.primary,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 8,
  },
  loginButtonText: {
    textAlign: "center",
    fontSize: 16,
    color: Colors.light.text,
  },
  changeUserLink: {
    flexDirection: "row",
    alignItems: "center",
  },
  changeUserIcon: {
    marginRight: 10,
  },
  changeUserText: {
    fontSize: 16,
    color: Colors.light.text,
  },
  bottomTab: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tabButtonContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
  tabButtonIconContainer: {
    width: 53,
    height: 53,
    borderRadius: 53 / 3,
    borderWidth: 0.5,
    borderColor: Colors.light.text,
    alignItems: "center",
    justifyContent: "center",
  },
  tabButtonText: {
    fontSize: 12,
    color: Colors.light.text,
  },
});
