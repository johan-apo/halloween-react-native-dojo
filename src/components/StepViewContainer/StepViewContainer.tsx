import { ScrollView, View } from "react-native";

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
      contentContainerStyle={{ alignItems: "center" }}
    >
      <View style={{ marginBottom: 16 }}>{svgComponent}</View>
      {children}
    </ScrollView>
  );
};
