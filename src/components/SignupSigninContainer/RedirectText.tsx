import { Text } from "react-native";
import { DefaultTheme } from "../../theme";

type RedirectTextProps = {
  onNavigate: () => void;
  redirectPathName: string;
  mainText: string;
};

export const RedirectText = ({
  onNavigate,
  redirectPathName,
  mainText,
}: RedirectTextProps) => {
  return (
    <Text
      style={{
        color: DefaultTheme.colors.darkerGray,
        fontSize: DefaultTheme.fontSizes.xs,
        textAlign: "center",
      }}
    >
      {`${mainText} `}
      <Text
        style={{
          textDecorationLine: "underline",
          color: DefaultTheme.colors.white,
          fontFamily: DefaultTheme.fontWeight[700],
        }}
        onPress={onNavigate}
      >
        {redirectPathName}
      </Text>
    </Text>
  );
};
