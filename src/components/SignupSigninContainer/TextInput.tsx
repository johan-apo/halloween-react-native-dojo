import { StyleSheet, TextInput as RNTextInput } from "react-native";
import { Controller } from "react-hook-form";

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#E6BF8D",
    padding: 10,
    borderRadius: 12,
    color: "#fff",
    paddingHorizontal: 20,
  },
});

type TextInputProps = {
  placeholder: string;
  control: any;
  name: any;
  others?: any;
};

const Input = ({ placeholder, control, name, ...others }: TextInputProps) => {
  return (
    <Controller
      control={control}
      rules={{ required: `This field is required` }}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <RNTextInput
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          placeholderTextColor="#fff"
          style={styles.textInput}
          {...others}
        />
      )}
    />
  );
};

export default Input;
