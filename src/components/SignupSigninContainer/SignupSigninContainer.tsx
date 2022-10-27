import { PumpkinsAndBatsSVG } from "components/SVGComponents";
import { ScrollView, View } from "react-native";
import { DefaultConfigs } from "theme";
import { CustomText } from "../Text";

export const SignupSigninContainer = ({
  greeting,
  subgreeting,
  children,
}: {
  greeting: string;
  subgreeting?: string;
  children: React.ReactNode;
}) => {
  return (
    <ScrollView style={{ backgroundColor: DefaultConfigs.colors.orange }}>
      <PumpkinsAndBatsSVG />
      <View style={{ paddingHorizontal: 16, position: "relative", top: -16 }}>
        <CustomText variant="h1" color="white">
          {greeting}
        </CustomText>
        {subgreeting && (
          <CustomText variant="lg" color="dirtBrown">
            {subgreeting}
          </CustomText>
        )}
        {children}
      </View>
    </ScrollView>
  );
};
