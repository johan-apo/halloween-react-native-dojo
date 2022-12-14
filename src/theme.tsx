type NumberOrSpacing = number | Spacing;

interface MarginProps {
  m: NumberOrSpacing;
  mt: NumberOrSpacing;
  mb: NumberOrSpacing;
  ml: NumberOrSpacing;
  mr: NumberOrSpacing;
  mx: NumberOrSpacing;
  my: NumberOrSpacing;
}

interface PaddingProps {
  p: NumberOrSpacing;
  pt: NumberOrSpacing;
  pb: NumberOrSpacing;
  pl: NumberOrSpacing;
  pr: NumberOrSpacing;
  px: NumberOrSpacing;
  py: NumberOrSpacing;
}

export type SpacingProps = Partial<MarginProps & PaddingProps>;

export enum Font {
  InterRegular = "Inter-Regular",
  InterMedium = "Inter-Medium",
  InterSemiBold = "Inter-SemiBold",
  InterBold = "Inter-Bold",
  InterExtraBold = "Inter-ExtraBold",
}

enum EnumColors {
  LighterGray = "#999",
  Gray = "#777777",
  DarkerGray = "#767676",
  White = "#fff",
  DirtBrown = "#88612F",
  BrownishRed = "#6e2b14",
  Orange = "#FFB41F",
  Brandy = "#E6BF8D",
  PumpkinBackground = "#F9B154",
}

export type FontWeight = keyof typeof DefaultTheme.fontWeight;
export type Colors = keyof typeof DefaultTheme.colors;
export type Spacing = keyof typeof DefaultTheme.spacing;

export const DefaultTheme = {
  spacing: {
    xs: 10,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24,
  },
  colors: {
    lighterGray: EnumColors.LighterGray,
    gray: EnumColors.Gray,
    darkerGray: EnumColors.DarkerGray,
    white: EnumColors.White,
    dirtBrown: EnumColors.DirtBrown,
    brownishRed: EnumColors.BrownishRed,
    orange: EnumColors.Orange,
    brandy: EnumColors.Brandy,
    pumpkinBackground: EnumColors.PumpkinBackground,
  },
  fontSizes: {
    xs: 14,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 30,
  },
  fontWeight: {
    "400": Font.InterRegular,
    "500": Font.InterMedium,
    "600": Font.InterSemiBold,
    "700": Font.InterBold,
    "800": Font.InterExtraBold,
  },
};
