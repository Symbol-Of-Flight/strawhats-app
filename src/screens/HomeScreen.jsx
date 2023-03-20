import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import Acquisition from '../components/Home/acqusition';
import Criteria from '../components/Home/criteria';
import Goals from '../components/Home/goals';
import Principle from '../components/Home/principle';
import Studio from '../components/Home/studio';

export default function HomeScreen() {
  return (
    <SafeAreaView className='flex-1 bg-black'>
        <StatusBar style="auto" />
        <ScrollView>
            <Goals/>
            <Criteria/>
            <Acquisition/>
            <Studio/>
            <Principle/>
        </ScrollView>
    </SafeAreaView>
  );
}

