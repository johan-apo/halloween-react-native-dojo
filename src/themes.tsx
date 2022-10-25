export enum Font {
  InterRegular = "Inter-Regular",
  InterMedium = "Inter-Medium",
  InterSemiBold = "Inter-SemiBold",
  InterBold = "Inter-Bold",
  InterExtraBold = "Inter-ExtraBold",
}

export enum Colors {
  Grey = "#777777",
  DarkerGrey = "#767676",
  White = "#fff",
  DirtBrown = "#88612F",
  BrownishRed = "#6e2b14",
}

export const DefaultConfigs = {
  typography: {
    fontFamily: {
      regular: Font.InterRegular,
      medium: Font.InterMedium,
      semiBold: Font.InterSemiBold,
      bold: Font.InterBold,
      extraBold: Font.InterExtraBold,
    },
    sizes: {
      h1: {
        size: 38,
        lineHeight: 44,
      },
      h2: {
        size: 32,
        lineHeight: 36,
      },
      h3: {
        size: 24,
        lineHeight: 30,
      },
      large: {
        size: 18,
        lineHeight: 26,
      },
      regular: {
        size: 16,
        lineHeight: 18,
      },
      small: {
        size: 14,
        lineHeight: 20,
      },
    },
  },
};
