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
}

export const DefaultConfigs = {
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

export type FontWeight = keyof typeof DefaultConfigs.fontWeight;
export type Colors = keyof typeof DefaultConfigs.colors;
export type Spacing = keyof typeof DefaultConfigs.spacing;

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
