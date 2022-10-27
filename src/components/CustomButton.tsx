import { Pressable, StyleSheet, Text } from "react-native";
import { DefaultConfigs, Font } from "../theme";

const borderRadius = 22;

const baseTouchableStyles = {
  paddingTop: 13,
  paddingBottom: 14,
  paddingHorizontal: 90,
};

const touchableStyles = StyleSheet.create({
  filled: {
    ...baseTouchableStyles,
    backgroundColor: DefaultConfigs.colors.orange,
    borderRadius,
  },
  dark: {
    ...baseTouchableStyles,
    backgroundColor: DefaultConfigs.colors.dirtBrown,
    borderRadius: 12,
  },
  outline: {
    ...baseTouchableStyles,
    borderColor: DefaultConfigs.colors.orange,
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
    color: DefaultConfigs.colors.white,
    fontFamily: Font.InterBold,
  },
  dark: {
    ...baseTextStyles,
    color: DefaultConfigs.colors.white,
    fontFamily: Font.InterBold,
    textAlign: "center",
  },
  outline: {
    ...baseTextStyles,
    color: DefaultConfigs.colors.orange,
    fontFamily: Font.InterSemiBold,
  },
  subtle: {
    ...baseTextStyles,
    color: DefaultConfigs.colors.lighterGray,
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
