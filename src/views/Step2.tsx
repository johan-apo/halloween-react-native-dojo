import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "App";
import {
  CustomButton,
  SkullsAndBatsSVG,
  StepViewContainer,
  TextContainer,
} from "components";

type Props = NativeStackScreenProps<RootStackParamList, "Step2">;

const Step2 = ({ navigation }: Props) => {
  const handlePress = (screen: any) => () => navigation.navigate(screen);

  return (
    <StepViewContainer svgComponent={<SkullsAndBatsSVG />}>
      <TextContainer title="Main Title" />
      <CustomButton variant="outline" onPress={handlePress("GetStarted")}>
        Next
      </CustomButton>
      <CustomButton variant="subtle" onPress={handlePress("SignUp")}>
        Skip
      </CustomButton>
    </StepViewContainer>
  );
};

export default Step2;
