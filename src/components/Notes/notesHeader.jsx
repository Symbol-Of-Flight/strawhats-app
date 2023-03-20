import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native'

export default function NotesHeader() {
  return (
    <View className="bg-[#171717] items-center " >          
      <Text className="text-white text-2xl pt-12 pb-4" style={{fontFamily: 'Kanit_400Regular'}}> Notes</Text>
    </View>
  );
}

