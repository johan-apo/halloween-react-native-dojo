import { Text, StyleSheet } from "react-native";
import { DefaultTheme, Font, Colors } from "theme";

const baseTextStyles = {
  marginBottom: DefaultTheme.spacing.md,
};

const styles = StyleSheet.create({
  h1: {
    fontFamily: DefaultTheme.fontWeight["800"],
    fontSize: DefaultTheme.fontSizes.xl,
    marginBottom: 4,
  },
  h2: {
    fontFamily: DefaultTheme.fontWeight["600"],
    fontSize: DefaultTheme.fontSizes.xl,
    ...baseTextStyles,
  },
  lg: {
    fontSize: DefaultTheme.fontSizes.md,
    fontFamily: DefaultTheme.fontWeight["400"],
    ...baseTextStyles,
  },
  paragraph: {
    fontSize: DefaultTheme.fontSizes.sm,
    fontFamily: DefaultTheme.fontWeight["400"],
    textAlign: "center",
    width: "75%",
    lineHeight: DefaultTheme.spacing.xl,
    ...baseTextStyles,
  },
  small: {
    fontFamily: DefaultTheme.fontWeight["400"],
    fontSize: DefaultTheme.fontSizes.xs,
    paddingTop: 4,
    paddingLeft: DefaultTheme.spacing.lg,
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
          color: DefaultTheme.colors[color],
        },
      ]}
    >
      {children}
    </Text>
  );
};
