import { TextInputProps, View } from "react-native";
import { DefaultTheme } from "theme";
import type { FormInputTypes } from "views/SignUp";
import { CustomText } from "../Text";
import { Input } from "./Input";

type InputFieldProps = {
  validationType?: FormInputTypes;
  inputProps: {
    placeholder: string;
    control: any;
    name: string;
    validate?: any;
  } & TextInputProps;
  errors: any;
};

export const InputField = ({
  inputProps: { placeholder, control, name, ...others },
  validationType: type,
  errors,
}: InputFieldProps) => {
  return (
    <View style={{ marginBottom: DefaultTheme.spacing.md }}>
      <Input
        validationType={type}
        placeholder={placeholder}
        control={control}
        name={name}
        {...others}
      />
      {errors && (
        <CustomText variant="small" color="brownishRed">
          {errors.message}
        </CustomText>
      )}
    </View>
  );
};
