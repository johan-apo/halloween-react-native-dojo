import { Text, StyleSheet } from "react-native";
import { DefaultConfigs, Font, Colors, SpacingProps } from "theme";

const baseTextStyles = {
  marginBottom: 14,
};

const styles = StyleSheet.create({
  h1: {
    fontFamily: Font.InterExtraBold,
    fontSize: 30,
    ...baseTextStyles,
  },
  h2: {
    fontFamily: Font.InterSemiBold,
    fontSize: 30,
    ...baseTextStyles,
  },
  lg: {
    fontSize: 18,
    fontFamily: Font.InterRegular,
    ...baseTextStyles,
  },
  paragraph: {
    fontSize: 16,
    fontFamily: Font.InterRegular,
    textAlign: "center",
    width: "75%",
    lineHeight: 24,
    ...baseTextStyles,
  },
  small: {
    fontSize: 14,
    paddingTop: 4,
    paddingLeft: 20,
  },
});

type Variants = keyof typeof styles;

type CustomTextProps = {
  children: string;
  variant?: Variants;
  color?: Colors;
};

export const CustomText = ({
  children,
  variant = "paragraph",
  color = "gray",
}: CustomTextProps) => {
  return (
    <Text
      style={[
        styles[variant],
        {
          color: DefaultConfigs.colors[color],
        },
      ]}
    >
      {children}
    </Text>
  );
};
