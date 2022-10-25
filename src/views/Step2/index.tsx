import { CustomButton } from "../../components/CustomButton";
import { StepViewContainer } from "../../components/StepViewContainer";
import SkullsAndBatsSVG from "../../components/SVGComponents/SkullsAndBats";
import { CustomText } from "../../components/Text";

const Step2 = ({ navigation }) => {
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
