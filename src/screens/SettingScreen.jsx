import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView } from 'react-native'

export default function SettingScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#334155]">
      <StatusBar style="auto" />
      <View className="flex-1 items-center justify-center ">
        <Text className="text-white">This is the SettingScreen</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

