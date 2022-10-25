import { ScrollView, View } from "react-native";

const StepViewContainer = ({
  svgComponent: SVGComponent,
  children,
}: {
  svgComponent: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        {SVGComponent}
        {children}
      </View>
    </ScrollView>
  );
};
export default StepViewContainer;
