import { Text, View } from 'react-native'

export default function Criteria() {
  return (
    <View>
        <View className="items-left mt-5 py-4">
            <Text className="text-white text-lg mx-10" style={{fontFamily: 'Kanit_400Regular'}}>Studio Criteria:</Text>
            <View className="">
                <View className='flex flex-row py-2 px-8'>
                    <View className='basis-1/2 px-5'>
                        <Text className="text-white text-sm text-left" style={{fontFamily: 'Kanit_400Regular'}}>-  B2B</Text>
                        <Text className="text-white text-sm text-left" style={{fontFamily: 'Kanit_400Regular'}}>-  Future of work</Text>
                        <Text className="text-white text-sm text-left" style={{fontFamily: 'Kanit_400Regular'}}>-  Expansion revenue</Text>
                        <Text className="text-white text-sm text-left" style={{fontFamily: 'Kanit_400Regular'}}>-  Slow Industry</Text>
                    </View>
                    <View className='basis-1/2 px-5'>
                        <Text className="text-white text-sm text-left" style={{fontFamily: 'Kanit_400Regular'}}>-  {'>'} $2.5m market</Text>
                        <Text className="text-white text-sm text-left" style={{fontFamily: 'Kanit_400Regular'}}>-  {'>'} $25 ACV</Text>
                        <Text className="text-white text-sm text-left" style={{fontFamily: 'Kanit_400Regular'}}>-  {'>'} 20% profits</Text>
                        <Text className="text-white text-sm text-left" style={{fontFamily: 'Kanit_400Regular'}}>-  {'>'} 30% growth</Text>
                    </View>
                </View>
            </View>
        </View>
    </View>
  );
}








