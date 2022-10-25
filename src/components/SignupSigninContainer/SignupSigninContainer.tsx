import { ScrollView, View } from "react-native";
import { Colors } from "../../themes";
import PumpkinsAndBatsSVG from "../SVGComponents/PumpkinsAndBats";
import { CustomText } from "../Text";

const SignupSigninContainer = ({
  greeting,
  subgreeting,
  children,
}: {
  greeting: string;
  subgreeting?: string;
  children: React.ReactNode;
}) => {
  return (
    <ScrollView style={{ backgroundColor: "#F9B154" }}>
      <PumpkinsAndBatsSVG />
      <View style={{ paddingHorizontal: 16, position: "relative", top: -16 }}>
        <CustomText variant="h1" color={Colors.White}>
          {greeting}
        </CustomText>
        {subgreeting && (
          <CustomText variant="lg" color={Colors.DirtBrown}>
            {subgreeting}
          </CustomText>
        )}
        {children}
      </View>
    </ScrollView>
  );
};

export default SignupSigninContainer;
