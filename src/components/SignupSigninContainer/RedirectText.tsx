import { Text } from "react-native";
import { DefaultConfigs } from "../../theme";

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
        color: DefaultConfigs.colors.darkerGray,
        fontSize: DefaultConfigs.fontSizes.xs,
        textAlign: "center",
      }}
    >
      {`${mainText} `}
      <Text
        style={{
          textDecorationLine: "underline",
          color: DefaultConfigs.colors.white,
          fontFamily: DefaultConfigs.fontWeight[700],
        }}
        onPress={onNavigate}
      >
        {redirectPathName}
      </Text>
    </Text>
  );
};
