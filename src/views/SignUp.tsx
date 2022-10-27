import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import {
  CustomButton,
  CustomText,
  InputField,
  SignupSigninContainer,
} from "components";
import { useForm, Controller } from "react-hook-form";
import { Alert, Text, TextInput, View } from "react-native";
import { DefaultConfigs } from "theme";

type Props = NativeStackScreenProps<RootStackParamList, "SignUp">;

const SignUp = ({ navigation }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data) => Alert.alert("Your result", JSON.stringify(data));

  const thereAreFormErrors = !(Object.keys(errors).length === 0);

  return (
    <SignupSigninContainer greeting="Welcome!">
      <InputField
        inputProps={{
          placeholder: "Username",
          control,
          name: "username",
          isUsername: true,
        }}
        errors={errors.username}
      />
      <InputField
        inputProps={{
          placeholder: "Email",
          control,
          name: "email",
          isEmail: true,
        }}
        errors={errors.email}
      />
      <InputField
        inputProps={{
          placeholder: "Password",
          control,
          name: "password",
          isPassword: true,
          secureTextEntry: true,
        }}
        errors={errors.password}
      />

      <Controller
        control={control}
        rules={{
          required: true,
          validate: (val: string) => {
            if (watch("password") != val) return "Your passwords do not match";
          },
        }}
        name={"confirmPassword"}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder="Confirm password"
            placeholderTextColor={DefaultConfigs.colors.white}
            style={{
              backgroundColor: DefaultConfigs.colors.brandy,
              padding: 10,
              borderRadius: 12,
              color: DefaultConfigs.colors.white,
              paddingHorizontal: 20,
            }}
            secureTextEntry
          />
        )}
      />
      {errors.confirmPassword && (
        <CustomText variant="small" color="brownishRed">
          {errors.confirmPassword.message!}
        </CustomText>
      )}

      <View style={{ marginTop: 18, marginBottom: 8 }}>
        <CustomButton
          disabled={thereAreFormErrors}
          variant="dark"
          onPress={handleSubmit(onSubmit)}
        >
          Sign Up
        </CustomButton>
      </View>
      <Text
        style={{
          color: DefaultConfigs.colors.darkerGray,
          fontSize: 14,
          textAlign: "center",
        }}
      >
        Already have an account?{" "}
        <Text
          style={{
            textDecorationLine: "underline",
            color: DefaultConfigs.colors.white,
            fontFamily: DefaultConfigs.fontWeight[700],
          }}
          onPress={() => navigation.navigate("SignIn")}
        >
          Sign in
        </Text>
      </Text>
    </SignupSigninContainer>
  );
};

export default SignUp;
