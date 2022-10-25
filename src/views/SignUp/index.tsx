import { useForm, Controller } from "react-hook-form";
import { Alert, Text, TextInput, View } from "react-native";
import { CustomButton } from "../../components/CustomButton";
import { SignupSigninContainer } from "../../components/SignupSigninContainer";
import InputField from "../../components/SignupSigninContainer/InputField";
import { Font } from "../../themes";

const SignUp = ({ navigation }) => {
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
        inputProps={{ placeholder: "Username", control, name: "username" }}
        errors={errors.username}
      />
      <InputField
        inputProps={{ placeholder: "Email", control, name: "email" }}
        errors={errors.email}
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
            placeholderTextColor="#fff"
            style={{
              backgroundColor: "#E6BF8D",
              padding: 10,
              borderRadius: 12,
              color: "#fff",
              paddingHorizontal: 20,
            }}
            secureTextEntry
          />
        )}
      />
      {errors.confirmPassword && <Text>{errors.confirmPassword.message}</Text>}

      <View style={{ marginTop: 18, marginBottom: 8 }}>
        <CustomButton
          disabled={thereAreFormErrors}
          variant="dark"
          onPress={handleSubmit(onSubmit)}
        >
          Sign Up
        </CustomButton>
      </View>
      <Text style={{ color: "#767676", fontSize: 14, textAlign: "center" }}>
        Already have an account?{" "}
        <Text
          style={{
            textDecorationLine: "underline",
            color: "#fff",
            fontFamily: Font.InterBold,
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
