import { StyleSheet, TextInput } from "react-native";
import { Controller } from "react-hook-form";
import type { Control } from "react-hook-form";
import { DefaultTheme } from "theme";
import { FormInputTypes } from "views/SignUp";

const styles = StyleSheet.create({
  textInput: {
    fontFamily: DefaultTheme.fontWeight["400"],
    backgroundColor: DefaultTheme.colors.brandy,
    padding: DefaultTheme.spacing.xs,
    borderRadius: DefaultTheme.spacing.sm,
    color: DefaultTheme.colors.white,
    paddingHorizontal: DefaultTheme.spacing.lg,
  },
});

type InputProps = {
  validationType?: FormInputTypes;
  placeholder: string;
  control: Control;
  name: string;
  validate?: any;
};

const EMAIL_REGEXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const USERNAME_REGEXP = /^[a-z0-9_.]+$/;
const PASSWORD_REGEXP =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

export const Input = ({
  placeholder,
  control,
  name,
  validationType: type,
  validate,
  ...others
}: InputProps) => {
  const validationBasedOnInputType = (
    validationType: FormInputTypes | undefined
  ) => {
    switch (validationType) {
      case "username":
        return {
          minLength: {
            value: 3,
            message: "Must be at least 3 characters long",
          },
          pattern: {
            value: USERNAME_REGEXP,
            message:
              "Must be numeric or lowercase characters, dots and underscores",
          },
        };
      case "email":
        return {
          pattern: {
            value: EMAIL_REGEXP,
            message: "Invalid email address",
          },
        };
      case "password":
        return {
          pattern: {
            value: PASSWORD_REGEXP,
            message:
              "Must be at least 8 characters long, at least one uppercase letter, one lowercase letter, one number and one special character",
          },
        };
      case "confirmPassword":
        return {
          validate,
        };
      default:
        return {};
    }
  };

  return (
    <Controller
      control={control}
      rules={{
        required: "This field is required",
        ...validationBasedOnInputType(type),
      }}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          placeholderTextColor={DefaultTheme.colors.white}
          style={styles.textInput}
          {...others}
        />
      )}
    />
  );
};
