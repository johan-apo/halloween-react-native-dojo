import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import {
  CustomButton,
  InputField,
  RedirectText,
  SignupSigninContainer,
} from "components";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Alert, Text, View } from "react-native";
import { DefaultConfigs } from "theme";
import { prettyStringifyAlert } from "utils";

type Props = NativeStackScreenProps<RootStackParamList, "SignIn">;

interface FormInputs {
  emailOrUsername: string;
  password: string;
}

const SignIn = ({ navigation }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: "all",
    defaultValues: {
      emailOrUsername: "",
      password: "",
    },
  });

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const onSubmit = (data: FormInputs) =>
    Alert.alert("Form data", prettyStringifyAlert(data));

  const thereAreFormErrors = !(Object.keys(errors).length === 0);

  return (
    <SignupSigninContainer greeting="Hi there!" subgreeting="Welcome back">
      <InputField
        inputProps={{
          placeholder: "Email / username",
          control,
          name: "emailOrUsername",
        }}
        errors={errors.emailOrUsername}
      />
      <InputField
        inputProps={{
          placeholder: "Password",
          control,
          name: "password",
          secureTextEntry: true,
        }}
        errors={errors.password}
      />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Checkbox
          color={DefaultConfigs.colors.dirtBrown}
          style={{
            marginRight: 8,
            height: 16,
            width: 16,
            borderRadius: 4,
          }}
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
        <Text
          style={{
            fontSize: DefaultConfigs.fontSizes.xs,
            color: DefaultConfigs.colors.darkerGray,
          }}
        >
          Remember me
        </Text>
      </View>

      <View style={{ marginTop: 18, marginBottom: 8 }}>
        <CustomButton
          disabled={thereAreFormErrors}
          variant="dark"
          onPress={handleSubmit(onSubmit)}
        >
          Sign In
        </CustomButton>
      </View>
      <RedirectText
        mainText="Don't have an account?"
        redirectPathName="Sign up"
        onNavigate={() => navigation.navigate("SignUp")}
      />
    </SignupSigninContainer>
  );
};

export default SignIn;
