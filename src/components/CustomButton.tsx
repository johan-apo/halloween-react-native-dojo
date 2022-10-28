import { Pressable, StyleSheet, Text } from "react-native";
import { DefaultTheme, Font } from "../theme";

const borderRadius = 22;

const baseTouchableStyles = {
  paddingTop: 13,
  paddingBottom: 14,
  paddingHorizontal: 90,
};

const touchableStyles = StyleSheet.create({
  filled: {
    ...baseTouchableStyles,
    backgroundColor: DefaultTheme.colors.orange,
    borderRadius,
  },
  dark: {
    ...baseTouchableStyles,
    backgroundColor: DefaultTheme.colors.dirtBrown,
    borderRadius: 12,
  },
  outline: {
    ...baseTouchableStyles,
    borderColor: DefaultTheme.colors.orange,
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
    color: DefaultTheme.colors.white,
    fontFamily: Font.InterBold,
  },
  dark: {
    ...baseTextStyles,
    color: DefaultTheme.colors.white,
    fontFamily: Font.InterBold,
    textAlign: "center",
  },
  outline: {
    ...baseTextStyles,
    color: DefaultTheme.colors.orange,
    fontFamily: Font.InterSemiBold,
  },
  subtle: {
    ...baseTextStyles,
    color: DefaultTheme.colors.lighterGray,
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
