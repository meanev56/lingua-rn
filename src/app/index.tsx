import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-background px-6 items-center justify-center">
      <Text className="typo_h1">
        Lingua design system is ready
      </Text>
      <Text className="font-poppins text-body-md text-text-secondary text-center mt-3 max-w-xs">
        The app now uses Poppins typography, brand colors, semantic tokens, and custom NativeWind utilities.
      </Text>
    </View>
  );
}
