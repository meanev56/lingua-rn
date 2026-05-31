import { Link } from "expo-router";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { images } from "../constants/images";

export default function Onboarding() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 bg-background px-6 pt-8">
        <View className="flex-row items-center justify-center gap-3 mb-12">
          <Image source={images.mascotLogo} className="w-10 h-10" resizeMode="contain" />
          <Text className="text-lg font-poppins-semibold text-text">muolingo</Text>
        </View>

        <View className="flex-1 justify-start">
          <Text className="text-[34px] leading-[40px] font-poppins-semibold text-text">
            Your AI language
          </Text>
          <Text className="text-[34px] leading-[40px] font-poppins-semibold text-brand mt-1">
            teacher.
          </Text>
          <Text className="text-body-lg text-text-secondary max-w-[280px] mt-4">
            Real conversations, personalized lessons, anytime, anywhere.
          </Text>

          <View className="relative items-center justify-center mt-10">
            <View className="absolute -top-2 -left-4 rounded-2xl bg-[#EEF2FF] px-4 py-3 shadow-soft">
              <Text className="text-body-sm font-poppins text-text">Hello!</Text>
            </View>
            <View className="absolute top-4 right-0 rounded-2xl bg-[#EEF5FF] px-4 py-3 shadow-soft">
              <Text className="text-body-sm font-poppins text-brand">¡Hola!</Text>
            </View>
            <View className="absolute bottom-10 right-8 rounded-2xl bg-[#FFF2EE] px-4 py-3 shadow-soft">
              <Text className="text-body-sm font-poppins text-[#D92C1A]">你好!</Text>
            </View>
            <Image
              source={images.mascotWelcome}
              className="w-[310px] h-[310px]"
              resizeMode="contain"
            />
          </View>
        </View>

        <View className="mb-6">
          <Link href="/" asChild>
            <TouchableOpacity className="rounded-[24px] bg-brand px-6 py-4 shadow-soft">
              <Text className="text-center text-white text-body-lg font-poppins-semibold">
                Get Started →
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
