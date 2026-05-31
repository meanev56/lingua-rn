import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-background px-6 items-center justify-center">
      <Text className="typo_h1 text-center">
        Lingua
      </Text>

      <Link href="/onboarding" asChild>
        <TouchableOpacity className="mt-8 rounded-3xl bg-brand px-5 py-4 shadow-soft">
          <Text className="text-white text-body-lg font-poppins-semibold text-center">
            Open Onboarding
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
