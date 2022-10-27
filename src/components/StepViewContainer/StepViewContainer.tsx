import { ScrollView, View } from "react-native";

export const StepViewContainer = ({
  svgComponent,
  children,
}: {
  svgComponent: React.ReactNode;
  children: React.ReactNode;
}) => {
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
