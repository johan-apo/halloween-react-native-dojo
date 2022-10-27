import { StyleSheet, TextInput } from "react-native";
import { Controller } from "react-hook-form";
import type { Control } from "react-hook-form";
import { DefaultConfigs } from "theme";

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: DefaultConfigs.colors.brandy,
    padding: 10,
    borderRadius: 12,
    color: DefaultConfigs.colors.white,
    paddingHorizontal: 20,
  },
});

type InputProps = {
  placeholder: string;
  control: Control;
  name: string;
  isUsername: boolean;
  isEmail: boolean;
  isPassword: boolean;
};

const EMAIL_REGEXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const USERNAME_REGEXP = /^[a-z0-9_.]+$/;
const PASSWORD_REGEXP =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

export const Input = ({
  placeholder,
  control,
  name,
  isUsername,
  isEmail,
  isPassword,
  ...others
}: InputProps) => {
  return (
    <Controller
      control={control}
      rules={{
        required: "This field is required",
        ...(isUsername && {
          minLength: {
            value: 3,
            message: "Must be at least 3 characters long",
          },
          pattern: {
            value: USERNAME_REGEXP,
            message:
              "Must be numeric or lowercase characters, dots and underscores",
          },
        }),
        ...(isEmail && {
          pattern: {
            value: EMAIL_REGEXP,
            message: "Invalid email address",
          },
        }),
        ...(isPassword && {
          pattern: {
            value: PASSWORD_REGEXP,
            message:
              "Must be at least 8 characters long, at least one uppercase letter, one lowercase letter, one number and one special character",
          },
        }),
      }}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          placeholderTextColor={DefaultConfigs.colors.white}
          style={styles.textInput}
          {...others}
        />
      )}
    />
  );
};
