import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import {
  CustomButton,
  CustomText,
  SkullsAndBatsSVG,
  StepViewContainer,
} from "components";

type Props = NativeStackScreenProps<RootStackParamList, "Step2">;

const Step2 = ({ navigation }: Props) => {
  return (
    <StepViewContainer svgComponent={<SkullsAndBatsSVG />}>
      <CustomText variant="h2">Main Title</CustomText>
      <CustomText variant="paragraph">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout
      </CustomText>
      <CustomButton
        variant="outline"
        onPress={() => navigation.navigate("GetStarted")}
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

export default Step2;
