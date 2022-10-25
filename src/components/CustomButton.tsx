import { Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Font } from "../themes";

const borderRadius = 22;

const baseTouchableStyles = {
  paddingTop: 13,
  paddingBottom: 14,
  paddingHorizontal: 80,
};

const touchableStyles = StyleSheet.create({
  filled: {
    ...baseTouchableStyles,
    backgroundColor: "#FFB41F",
    borderRadius,
  },
  dark: {
    ...baseTouchableStyles,
    backgroundColor: "#88612F",
    borderRadius: 12,
  },
  outline: {
    ...baseTouchableStyles,
    borderColor: "orange",
    borderWidth: 2,
    padding: 10,
    borderRadius,
  },
  subtle: {
    ...baseTouchableStyles,
  },
});

const baseTextStyles = {
  fontSize: 20,
};

const textStyles = StyleSheet.create({
  filled: {
    ...baseTextStyles,
    color: "#fff",
    fontFamily: Font.InterBold,
  },
  dark: {
    ...baseTextStyles,
    color: "#fff",
    fontFamily: Font.InterBold,
    textAlign: "center",
  },
  outline: {
    ...baseTextStyles,
    color: "#FFB41F",
    fontFamily: Font.InterSemiBold,
  },
  subtle: {
    ...baseTextStyles,
    color: "#999",
    fontFamily: Font.InterMedium,
  },
});

type CustomButtonProps = {
  variant?: "filled" | "outline" | "subtle" | "dark";
  children: string;
  onPress: () => void;
  disabled?: boolean;
};

export const CustomButton = ({
  children,
  variant = "filled",
  onPress,
  disabled,
}: CustomButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[touchableStyles[variant]]}
    >
      <Text style={[textStyles[variant]]}>{children}</Text>
    </Pressable>
  );
};
