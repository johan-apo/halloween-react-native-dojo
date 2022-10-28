import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import {
  CustomButton,
  StepViewContainer,
  TextContainer,
  ZombiesBatsAndMoon,
} from "components";

type Props = NativeStackScreenProps<RootStackParamList, "GetStarted">;

const GetStarted = ({ navigation }: Props) => {
  const handlePress = (screen: any) => () => navigation.navigate(screen);

  return (
    <StepViewContainer svgComponent={<ZombiesBatsAndMoon />}>
      <TextContainer />
      <CustomButton variant="filled" onPress={handlePress("SignUp")}>
        Get started
      </CustomButton>
    </StepViewContainer>
  );
};

export default GetStarted;
