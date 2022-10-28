import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "App";
import {
  CustomButton,
  GhostsSVG,
  StepViewContainer,
  TextContainer,
} from "components";

type Props = NativeStackScreenProps<RootStackParamList, "Step1">;

const Step1 = ({ navigation }: Props) => {
  const handlePress = (screen: any) => () => navigation.navigate(screen);

  return (
    <StepViewContainer svgComponent={<GhostsSVG />}>
      <TextContainer title="Main title" />
      <CustomButton variant="outline" onPress={handlePress("Step2")}>
        Next
      </CustomButton>
      <CustomButton variant="subtle" onPress={handlePress("SignUp")}>
        Skip
      </CustomButton>
    </StepViewContainer>
  );
};

export default Step1;
