import { View } from "react-native";
import { CustomButton } from "../../components/CustomButton";
import { StepViewContainer } from "../../components/StepViewContainer";
import GhostsSVG from "../../components/SVGComponents/Ghosts";
import { CustomText } from "../../components/Text";
import { Colors } from "../../themes";

// TODO: TYPE CHECK THE CODEBASE
const Step1 = ({ navigation }) => {
  return (
    <StepViewContainer svgComponent={<GhostsSVG />}>
      <CustomText variant="h2" color={Colors.Grey}>
        Main title
      </CustomText>
      <CustomText variant="paragraph" color={Colors.Grey}>
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
    // <View
    //   style={{
    //     flex: 1,
    //     alignItems: "center",
    //   }}
    // >
    //   <GhostsSVG />
    //   <Typography variant="h2" color={Colors.Grey}>
    //     Main title
    //   </Typography>
    //   <Typography variant="paragraph" color={Colors.Grey}>
    //     It is a long established fact that a reader will be distracted by the
    //     readable content of a page when looking at its layout
    //   </Typography>
    //   <CustomButton
    //     variant="outline"
    //     onPress={() => navigation.navigate("Step2")}
    //   >
    //     Next
    //   </CustomButton>
    //   <CustomButton
    //     variant="subtle"
    //     onPress={() => navigation.navigate("GetStarted")}
    //   >
    //     Skip
    //   </CustomButton>
    // </View>
  );
};

export default Step1;
