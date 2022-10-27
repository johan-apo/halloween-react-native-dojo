import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import {
  CustomButton,
  CustomText,
  StepViewContainer,
  ZombiesBatsAndMoon,
} from "components";

type Props = NativeStackScreenProps<RootStackParamList, "GetStarted">;

const GetStarted = ({ navigation }: Props) => {
  return (
    <StepViewContainer svgComponent={<ZombiesBatsAndMoon />}>
      <CustomText>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout
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
