import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, TextInput, Pressable } from 'react-native'
import { useState } from 'react';
// import { authenticate } from '../../utils/firebaseConfig';
// import { signInWithEmailAndPassword } from "firebase/auth";


export default function LoginScreen() {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    // const signIn = () => {
    //     console.log('i ran', email, password)
    //     signInWithEmailAndPassword(authenticate,email,password).then((userCredential) => {
    //         // Signed in 
    //         const user = userCredential.user;
    //         console.log(user)
    //         // ...
    //       })
    //       .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //       });
    // }

    return (
        <SafeAreaView className='flex-1 bg-black'>
            <StatusBar style="auto" />
            <View className='flex-1 justify-center items-center'>
                <Text className='text-white text-xl font-bold'>Login</Text>
                <View className='min-w-[55%]'>
                    <TextInput 
                        className='border border-white pl-3 mt-3 text-white rounded text-lg py-1' 
                        placeholder='Email' 
                        placeholderTextColor="#FAFAFA" 
                        underlineColorAndroid="transparent" 
                        autoCapitalize="none"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                    />
                </View>
                <View className='min-w-[55%]'>
                    <TextInput 
                        className='border border-white pl-3 my-3 text-white rounded text-lg py-1' 
                        placeholder='Password' 
                        placeholderTextColor="#FAFAFA"
                        secureTextEntry
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                    />
                </View>
                <Pressable onPress={()=>signIn()}>
                    <View className='bg-[#171717] px-24 py-3 rounded-xl mb-32' style={styles.whiteShadow}>
                        <Text className='text-white text-lg font-bold'>Login</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
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