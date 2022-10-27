import React, { useCallback, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from "react-native-screens";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Font } from "./theme";
import { GetStarted, SignIn, SignUp, Step1, Step2 } from "views";
import { registerRootComponent } from "expo";

export type RootStackParamList = {
  Step1: undefined;
  Step2: undefined;
  GetStarted: undefined;
  SignUp: undefined;
  SignIn: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

enableScreens();

function App() {
  const [fontsLoaded] = useFonts({
    [Font.InterRegular]: require("~assets/fonts/Inter-Regular.ttf"),
    [Font.InterMedium]: require("~assets/fonts/Inter-Medium.ttf"),
    [Font.InterSemiBold]: require("~assets/fonts/Inter-SemiBold.ttf"),
    [Font.InterBold]: require("~assets/fonts/Inter-Bold.ttf"),
    [Font.InterExtraBold]: require("~assets/fonts/Inter-ExtraBold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer onReady={onLayoutRootView}>
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

registerRootComponent(App);
