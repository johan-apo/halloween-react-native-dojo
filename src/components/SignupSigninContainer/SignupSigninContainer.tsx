import { PumpkinsAndBatsSVG } from "components/SVGComponents";
import { ScrollView, View } from "react-native";
import { DefaultConfigs } from "theme";
import { CustomText } from "../Text";

type SignupSigninContainerProps = {
  greeting: string;
  subgreeting?: string;
  children: React.ReactNode;
};

export const SignupSigninContainer = ({
  greeting,
  subgreeting,
  children,
}: SignupSigninContainerProps) => {
  return (
    <ScrollView
      style={{ backgroundColor: DefaultConfigs.colors.pumpkinBackground }}
    >
      <PumpkinsAndBatsSVG />
      <View style={{ paddingHorizontal: 16, position: "relative", top: -20 }}>
        <Greetings greeting={greeting} subgreeting={subgreeting} />
        {children}
      </View>
    </ScrollView>
  );
};

const Greetings = ({
  greeting,
  subgreeting,
}: Pick<SignupSigninContainerProps, "greeting" | "subgreeting">) => (
  <>
    <CustomText variant="h1" color="white">
      {greeting}
    </CustomText>
    {subgreeting && (
      <CustomText variant="lg" color="dirtBrown">
        {subgreeting}
      </CustomText>
    )}
  </>
);
