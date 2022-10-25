import CheckBox from "@react-native-community/checkbox";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Alert, Text, View } from "react-native";
import { CustomButton } from "../../components/CustomButton";
import { SignupSigninContainer } from "../../components/SignupSigninContainer";
import InputField from "../../components/SignupSigninContainer/InputField";
import { Font } from "../../themes";

const SignIn = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const onSubmit = (data) => Alert.alert("Your result", JSON.stringify(data));

  const thereAreFormErrors = !(Object.keys(errors).length === 0);

  return (
    <SignupSigninContainer greeting="Hi there!" subgreeting="Welcome back">
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
      {/* <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={(newValue) => setToggleCheckBox(newValue)}
      /> */}

      <View style={{ marginTop: 18, marginBottom: 8 }}>
        <CustomButton
          disabled={thereAreFormErrors}
          variant="dark"
          onPress={handleSubmit(onSubmit)}
        >
          Sign In
        </CustomButton>
      </View>
      <Text style={{ color: "#767676", fontSize: 14, textAlign: "center" }}>
        Don't have an account?{" "}
        <Text
          style={{
            textDecorationLine: "underline",
            color: "#fff",
            fontFamily: Font.InterBold,
          }}
          onPress={() => navigation.navigate("SignUp")}
        >
          Sign up
        </Text>
      </Text>
    </SignupSigninContainer>
  );
};

export default SignIn;
