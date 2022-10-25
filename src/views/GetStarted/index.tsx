import { CustomButton } from "../../components/CustomButton";
import { StepViewContainer } from "../../components/StepViewContainer";
import ZombiesBatsAndMoon from "../../components/SVGComponents/ZombiesBatsAndMoon";
import { CustomText } from "../../components/Text";

const GetStarted = ({ navigation }) => {
  return (
    <StepViewContainer svgComponent={<ZombiesBatsAndMoon />}>
      <CustomText>
        It is a long established fact that a reader will be distracted by the
        readable conent of a page when looking at its layout
      </CustomText>
      <CustomButton
        variant="filled"
        onPress={() => navigation.navigate("SignUp")}
      >
        Get started
      </CustomButton>
    </StepViewContainer>
  );
};

export default GetStarted;
