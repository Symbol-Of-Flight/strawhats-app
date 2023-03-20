import { useState,useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native'

export default function Studio() {
    
    const [salary, setSalary] = useState(90)
    const [growth, setGrowth] = useState(5)

    function handleSalary(){
        if(salary===90){
            setSalary(120)
        }
        else if(salary===120){
            setSalary(150)
        }
        else if(salary===150){
            setSalary(180)
        }
        else if(salary===180){
            setSalary(210)
        }
        else if(salary===210){
            setSalary(240)
        }
        else if(salary===240){
            setSalary(90)
        }
    }

    function handleGrowth(){
        if(growth===5){
            setGrowth(10)
        }else if(growth===10){
            setGrowth(15)
        }
        else if(growth===15){
            setGrowth(20)
        }
        else if(growth===20){
            setGrowth(25)
        }
        else if(growth===25){
            setGrowth(5)
        }
    }

    const [losses, setLosses] = useState(0)
    const [inRed, setInRed] = useState(0)

    useEffect(() => {
        let monthlyCost = (salary/12)
        let MRR = 5
        let monthCounter = 0
        let totalLosses = salary

        while (MRR <= monthlyCost){
            MRR = ( 5 * Math.pow((1+(growth/100)),monthCounter) )
            monthCounter++
            setInRed(monthCounter+12)

            totalLosses = totalLosses + monthlyCost - MRR
            setLosses(totalLosses.toFixed(1))
        }
    }, [salary,growth]);



    return (
        <View>
            <View className="shadow items-left mt-8 py-4 mx-12">
                <Text className="text-white text-base font-bold mb-2" style={{fontFamily: 'Kanit_400Regular'}}>Calculator: Studio</Text>
                <View className='flex flex-row mt-2'>
                    <TouchableOpacity className='basis-1/3 bg-white py-2 rounded-md bg-[#171717]' onPress={handleSalary}>
                        <View >
                            <Text className="text-[#FAFAFA] text-base text-center" style={{fontFamily: 'Kanit_400Regular'}}>${salary}k</Text>
                            <Text className="text-[#FAFAFA] text-sm text-center font-bold" style={{fontFamily: 'Kanit_400Regular'}}>Salary</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity className='basis-1/3 bg-white py-2 rounded-md mx-2 bg-[#171717]' onPress={handleGrowth}>
                        <View >
                            <Text className="text-[#FAFAFA] text-base text-center" style={{fontFamily: 'Kanit_400Regular'}}>{growth}%</Text>
                            <Text className="text-[#FAFAFA] text-sm text-center font-bold" style={{fontFamily: 'Kanit_400Regular'}}>MoM Growth</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View className='mt-2 opacity-60'>
                    <Text className="text-white text-base text-left" style={{fontFamily: 'Kanit_400Regular'}}>In Negative: {inRed} months</Text>
                    <Text className="text-white text-base text-left" style={{fontFamily: 'Kanit_400Regular'}}>Total Losses: ${losses}k</Text>
                </View>
            </View>
        </View>
    );
}

