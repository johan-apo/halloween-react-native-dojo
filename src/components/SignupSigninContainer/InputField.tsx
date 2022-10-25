import { View } from "react-native";
import { Colors } from "../../themes";
import { CustomText } from "../Text";
import Input from "./TextInput";

const InputField = ({
  inputProps: { placeholder, control, name, ...others },
  errors,
}: any) => {
  return (
    <View style={{ marginBottom: 14 }}>
      <Input
        placeholder={placeholder}
        control={control}
        name={name}
        {...others}
      />
      {errors && (
        <CustomText variant="small" color={Colors.BrownishRed}>
          {errors.message}
        </CustomText>
      )}
    </View>
  );
};

export default InputField;
