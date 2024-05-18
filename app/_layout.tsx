import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useColorScheme } from "@/components/useColorScheme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import Header from "@/components/Header";
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "sign-in",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
    Black: require("@/assets/fonts/Bold.ttf"),
    ExtraBold: require("@/assets/fonts/ExtraBold.ttf"),
    Bold: require("@/assets/fonts/Bold.ttf"),
    SemiBold: require("@/assets/fonts/SemiBold.ttf"),
    Medium: require("@/assets/fonts/Medium.ttf"),
    Regular: require("@/assets/fonts/Regular.ttf"),
    Light: require("@/assets/fonts/Light.ttf"),
    ExtraLight: require("@/assets/fonts/ExtraLight.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Drawer
          screenOptions={{
            header: () => <Header />,
          }}
          initialRouteName="sign-in"
        >
          <Drawer.Screen name="sign-in" options={{ headerShown: false }} />
          <Drawer.Screen name="(tabs)" />
        </Drawer>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
