import { useState } from 'react';
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native'
import moment from 'moment/moment';

export default function Goals() {
    const today = moment.now()
    const longTerm = moment([2043, 4, 15])
    const shortTerm = moment([2024, 4, 15])

    const [term, setTerm] = useState("Long Term")
    const [dateDiff, setDateDiff] = useState(longTerm.diff(today,'months'))

    function handleTerm(){
        if(term==="Long Term"){
            setTerm("Short Term")
            setDateDiff(shortTerm.diff(today,'months'))
        }else if(term==="Short Term"){
            setTerm("Long Term")
            setDateDiff(longTerm.diff(today,'months'))
        }
    }
    

    return (
        <View>
            <View className="pt-24 pb-24 bg-black items-center bg-[#171717]" >
                
                <Text className="text-white text-2xl pb-2" style={{fontFamily: 'Kanit_400Regular'}}> Hey again 👋</Text>
                <Text className="text-white text-lg" style={{fontFamily: 'Kanit_400Regular'}}>Potest Qui Vult</Text>

                <Text className="text-white text-lg pt-10" style={{fontFamily: 'Kanit_400Regular'}}>You have</Text>
                <Text className="text-white text-2xl py-2 pb-4" style={{fontFamily: 'Kanit_400Regular'}}>{dateDiff} months left</Text>
                <TouchableOpacity className="bg-white px-5 py-1 rounded-md" onPress={handleTerm}>
                    <Text className="text-[#0F172A] text-base font-bold" style={{fontFamily: 'Kanit_400Regular'}}>{term}</Text>
                </TouchableOpacity>
            </View>
            <View className="bg-[#171717] rounded-2xl shadow items-center -mt-12 mx-8 py-4" style={styles.whiteShadow}>
                <Text className="text-white text-base font-bold mb-2" style={{fontFamily: 'Kanit_400Regular'}}>Goals</Text>
                <View className='flex flex-row'>
                    <View className='basis-1/3 '>
                        <Text className="text-white text-base text-center" style={{fontFamily: 'Kanit_400Regular'}}>{term==="Long Term" ? '$30m' : '$1.2m'}</Text>
                        <Text className="text-white text-sm text-center font-bold" style={{fontFamily: 'Kanit_400Regular'}}>ARR</Text>
                    </View>
                    <View className='basis-1/3 '>
                        <Text className="text-white text-base text-center" style={{fontFamily: 'Kanit_400Regular'}}>{term==="Long Term" ? '$2.5m' : '$100k'}</Text>
                        <Text className="text-white text-sm text-center font-bold" style={{fontFamily: 'Kanit_400Regular'}}>MRR</Text>
                    </View>
                    <View className='basis-1/3 '>
                        <Text className="text-white text-base text-center" style={{fontFamily: 'Kanit_400Regular'}}>{term==="Long Term" ? '$1.5m' : '$120k'}</Text>
                        <Text className="text-white text-sm text-center font-bold" style={{fontFamily: 'Kanit_400Regular'}}>Cash</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    whiteShadow: {
        shadowColor: '#FFF',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 10,
    },
});
