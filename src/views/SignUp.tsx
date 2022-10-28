import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import {
  CustomButton,
  InputField,
  RedirectText,
  SignupSigninContainer,
} from "components";
import { useForm } from "react-hook-form";
import { Alert, Text, View } from "react-native";
import { DefaultTheme } from "theme";
import { prettyStringifyAlert } from "utils";

type Props = NativeStackScreenProps<RootStackParamList, "SignUp">;

interface FormInputs {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type FormInputTypes = keyof FormInputs;

const SignUp = ({ navigation }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormInputs>({
    mode: "all",
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const inputs = [
    // no need of "name" as "validationType" and name are same
    {
      validationType: "username",
      placeholder: "Username",
      errors: errors.username,
    },
    { validationType: "email", placeholder: "Email", errors: errors.email },
    {
      validationType: "password",
      placeholder: "Password",
      errors: errors.password,
      secureTextEntry: true,
    },
    {
      validationType: "confirmPassword",
      placeholder: "Confirm password",
      errors: errors.confirmPassword,
      secureTextEntry: true,
      validate: (val: string) => {
        if (watch("password") != val) return "Your passwords do not match";
      },
    },
  ];

  const onSubmit = (data: FormInputs) =>
    Alert.alert("Form data", prettyStringifyAlert(data));

  const thereAreFormErrors = !(Object.keys(errors).length === 0);

  return (
    <SignupSigninContainer greeting="Welcome!">
      {inputs.map((input) => (
        <InputField
          validationType={input.validationType as FormInputTypes}
          inputProps={{
            ...input,
            placeholder: input.placeholder,
            control,
            name: input.validationType,
          }}
          errors={input.errors}
          key={input.validationType}
        />
      ))}
      <View
        style={{
          marginTop: DefaultTheme.spacing.md,
          marginBottom: DefaultTheme.spacing.xs,
        }}
      >
        <CustomButton
          disabled={thereAreFormErrors}
          variant="dark"
          onPress={handleSubmit(onSubmit)}
        >
          Sign Up
        </CustomButton>
      </View>
      <RedirectText
        mainText="Already have an account?"
        redirectPathName="Sign in"
        onNavigate={() => navigation.navigate("SignIn")}
      />
    </SignupSigninContainer>
  );
};

export default SignUp;
