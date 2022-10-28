import { ScrollView, View } from "react-native";
import { DefaultTheme } from "theme";

type StepViewContainerProps = {
  svgComponent: React.ReactNode;
  children: React.ReactNode;
};

export const StepViewContainer = ({
  svgComponent,
  children,
}: StepViewContainerProps) => {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        alignItems: "center",
        paddingBottom: DefaultTheme.spacing.md,
      }}
    >
      <View style={{ marginBottom: DefaultTheme.spacing.md }}>
        {svgComponent}
      </View>
      {children}
    </ScrollView>
  );
};
