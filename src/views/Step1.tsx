import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "App";
import {
  CustomButton,
  CustomText,
  GhostsSVG,
  StepViewContainer,
} from "components";

type Props = NativeStackScreenProps<RootStackParamList, "Step1">;

const Step1 = ({ navigation }: Props) => {
  return (
    <StepViewContainer svgComponent={<GhostsSVG />}>
      <CustomText variant="h2">Main title</CustomText>
      <CustomText variant="paragraph">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout
      </CustomText>
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
