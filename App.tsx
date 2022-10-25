import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDidMountEffect } from "./src/services/utils";
import { enableScreens } from "react-native-screens";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Step1 from "./src/views/Step1";
import Step2 from "./src/views/Step2";
import GetStarted from "./src/views/GetStarted";
import SignUp from "./src/views/SignUp";
import SignIn from "./src/views/SignIn";
import { Font } from "./src/themes";

const Stack = createNativeStackNavigator();

enableScreens();

export default function App() {
  const [fontsLoaded] = useFonts({
    [Font.InterRegular]: require("./assets/fonts/Inter-Regular.ttf"),
    [Font.InterMedium]: require("./assets/fonts/Inter-Medium.ttf"),
    [Font.InterSemiBold]: require("./assets/fonts/Inter-SemiBold.ttf"),
    [Font.InterBold]: require("./assets/fonts/Inter-Bold.ttf"),
    [Font.InterExtraBold]: require("./assets/fonts/Inter-ExtraBold.ttf"),
  });

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  useDidMountEffect(() => {
    if (fontsLoaded) setTimeout(SplashScreen.hideAsync, 100);
  }, [fontsLoaded]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Step1" component={Step1} />
          <Stack.Screen name="Step2" component={Step2} />
          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
