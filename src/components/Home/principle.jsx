import { useState,useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native'

export default function Principle() {
    
    const [interest, setInterest] = useState(3)
    

    function handleInterest(){
        if(interest===3){
            setInterest(4)
        }
        else if(interest===4){
            setInterest(5)
        }
        else if(interest===5){
            setInterest(7.5)
        }
        else if(interest===7.5){
            setInterest(10)
        }
        else if(interest===10){
            setInterest(15)
        }
        else if(interest===15){
            setInterest(20)
        }
        else if(interest===20){
            setInterest(25)
        }
        else if(interest===25){
            setInterest(30)
        }
        else if(interest===30){
            setInterest(3)
        }
    }


    const [basic, setBasic] = useState(2)
    const [average, setAverage] = useState(4)
    const [luxury, setLuxury] = useState(6)
    

    useEffect(() => {
        setBasic(60/(interest)/10)
        setAverage(120/(interest)/10)
        setLuxury(240/(interest)/10)
    }, [interest]);



    return (
        <View className='mb-36'>
            <View className="shadow items-left mt-8 mb-36 py-4 mx-12">
                <Text className="text-white text-base font-bold mb-2" style={{fontFamily: 'Kanit_400Regular'}}>Principle Requirement</Text>
                
                <TouchableOpacity className='basis-1/3 bg-white py-2 rounded-md bg-[#171717]' onPress={handleInterest}>
                    <View >
                        <Text className="text-[#FAFAFA] text-base text-center" style={{fontFamily: 'Kanit_400Regular'}}>At {interest}% returns...</Text>
                    </View>
                </TouchableOpacity>
                
                <View className='mt-2 opacity-60'>
                    <Text className="text-white text-base text-left" style={{fontFamily: 'Kanit_400Regular'}}>Basic - $60k: ${basic}m</Text>
                    <Text className="text-white text-base text-left" style={{fontFamily: 'Kanit_400Regular'}}>Average - $120k: ${average}m</Text>
                    <Text className="text-white text-base text-left" style={{fontFamily: 'Kanit_400Regular'}}>Luxury - $240k: ${luxury}m</Text>
                </View>
            </View>
        </View>
    );
}

