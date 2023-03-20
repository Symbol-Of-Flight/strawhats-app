import { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native'

export default function Acquisition() {
    const [multiple, setMultiple] = useState(3)
    const [growth, setGrowth] = useState(30)

    function handleMultiple(){
        if(multiple===3){
            setMultiple(4)
        }else if(multiple===4){
            setMultiple(5)
        }
        else if(multiple===5){
            setMultiple(6)
        }
        else if(multiple===6){
            setMultiple(3)
        }
    }

    function handleGrowth(){
        if(growth===30){
            setGrowth(35)
        }
        else if(growth===35){
            setGrowth(40)
        }
        else if(growth===40){
            setGrowth(45)
        }
        else if(growth===45){
            setGrowth(50)
        }
        else if(growth===50){
            setGrowth(55)
        }
        else if(growth===55){
            setGrowth(30)
        }
    }

    const [fiveYear, setFiveYear] = useState(Math.pow((1+(growth/100)),5).toFixed(1))
    const [tenYear, setTenYear] = useState(Math.pow((1+(growth/100)),10).toFixed(1))
    const [payback, setPayback] = useState(3)

    useEffect(() => {
        setFiveYear(Math.pow((1+(growth/100)),5).toFixed(1))
        setTenYear(Math.pow((1+(growth/100)),10).toFixed(1))
    }, [growth]);

    useEffect(() => {
        let x = multiple
        let totalCash = 0
        let totalYears = 0
        while (x > totalCash){
            if(totalCash===0){
                totalCash=0.1
                totalYears++
            }else{
                totalCash = totalCash + Math.pow((1+(growth/100)),totalYears)*0.1
                totalYears++
                setPayback(totalYears)
            }
        }
    }, [multiple,growth]);



    return (
        <View>
            <View className="items-left mx-12 py-4">
                <Text className="text-white text-lg font-bold mb-2" style={{fontFamily: 'Kanit_400Regular'}}>Calculator: Acquisition </Text>
                <View className='flex flex-row'>
                    <TouchableOpacity className='basis-1/3 bg-white py-2 rounded-md bg-[#171717]' onPress={handleMultiple}>
                        <View className=''>
                            <Text className="text-[#FAFAFA] text-base text-center" style={{fontFamily: 'Kanit_400Regular'}}>{multiple}x</Text>
                            <Text className="text-[#FAFAFA] text-sm text-center font-bold" style={{fontFamily: 'Kanit_400Regular'}}>Multiple</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity className='basis-1/3 bg-white py-2 rounded-md mx-2 bg-[#171717]' onPress={handleGrowth}>
                        <View className=''>
                            <Text className="text-[#FAFAFA] text-base text-center" style={{fontFamily: 'Kanit_400Regular'}}>{growth}%</Text>
                            <Text className="text-[#FAFAFA] text-sm text-center font-bold" style={{fontFamily: 'Kanit_400Regular'}}>Growth Rate</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View className='mt-2 opacity-60'>
                    <Text className="text-white text-base text-left" style={{fontFamily: 'Kanit_400Regular'}}>5yr ARR: {fiveYear}x</Text>
                    <Text className="text-white text-base text-left" style={{fontFamily: 'Kanit_400Regular'}}>10yr ARR: {tenYear}x</Text>
                    <Text className="text-white text-base text-left" style={{fontFamily: 'Kanit_400Regular'}}>Payback: {payback} years</Text>
                </View>
            </View>
        </View>
    );
}

