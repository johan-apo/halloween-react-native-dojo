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
  return (
    <StepViewContainer svgComponent={<GhostsSVG />}>
      <TextContainer />
      <CustomButton
        variant="outline"
        onPress={() => navigation.navigate("Step2")}
      >
        Next
      </CustomButton>
      <CustomButton
        variant="subtle"
        onPress={() => navigation.navigate("SignUp")}
      >
        Skip
      </CustomButton>
    </StepViewContainer>
  );
};

export default Step1;
