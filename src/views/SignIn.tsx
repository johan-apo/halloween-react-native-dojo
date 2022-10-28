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
import { DefaultTheme } from "theme";
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

  const inputs = [
    {
      name: "emailOrUsername",
      placeholder: "Email / username",
      errors: errors.emailOrUsername,
    },
    {
      name: "password",
      placeholder: "Password",
      errors: errors.password,
      secureTextEntry: true,
    },
  ];

  const onSubmit = (data: FormInputs) =>
    Alert.alert("Form data", prettyStringifyAlert(data));

  const thereAreFormErrors = !(Object.keys(errors).length === 0);

  return (
    <SignupSigninContainer greeting="Hi there!" subgreeting="Welcome back">
      {inputs.map((input) => (
        <InputField
          inputProps={{
            ...input,
            placeholder: input.placeholder,
            control,
            name: input.name,
          }}
          errors={input.errors}
          key={input.name}
        />
      ))}
      <RememberMeCheckbox />
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

const RememberMeCheckbox = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Checkbox
        color={DefaultTheme.colors.dirtBrown}
        style={{
          marginRight: DefaultTheme.spacing.xs,
          height: DefaultTheme.spacing.md,
          width: DefaultTheme.spacing.md,
          borderRadius: 4,
        }}
        disabled={false}
        value={toggleCheckBox}
        onValueChange={(newValue) => setToggleCheckBox(newValue)}
      />
      <Text
        style={{
          fontSize: DefaultTheme.fontSizes.xs,
          color: DefaultTheme.colors.darkerGray,
        }}
      >
        Remember me
      </Text>
    </View>
  );
};

export default SignIn;
