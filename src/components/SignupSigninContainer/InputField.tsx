import { TextInputProps, View } from "react-native";
import { CustomText } from "../Text";
import { Input } from "./Input";

type InputFieldProps = {
  inputProps: {
    placeholder: string;
    control: any;
    name: string;
    isUsername?: boolean;
    isEmail?: boolean;
    isPassword?: boolean;
    isConfirmPassword?: boolean;
  } & TextInputProps;
  errors: any;
};

export const InputField = ({
  inputProps: {
    placeholder,
    control,
    name,
    isUsername = false,
    isEmail = false,
    isPassword = false,
    ...others
  },
  errors,
}: InputFieldProps) => {
  return (
    <View style={{ marginBottom: 14 }}>
      <Input
        isUsername={isUsername}
        isEmail={isEmail}
        isPassword={isPassword}
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
