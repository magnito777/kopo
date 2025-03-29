import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import tw from 'twrnc';
import { Stack, Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const MyComponent = () => {
    return (
        <>
            <Stack.Screen 
                options={{
                    headerShown: false,
                    animation: 'none'
                }} 
            />

            <ImageBackground
                source={require('../assets/images/bones/home.png')}
                style={styles.background}
            >
                <Link href="/" style={styles.backLink}>
                    <Ionicons name="chevron-back" size={60} color="#5B9BD5" />
                </Link>

                <View style={tw`flex-1 justify-center items-center z-10`}>  
                    <Link href="/_stack/home" style={tw`px-12 py-6 rounded-full bg-[#843C0C] mt-80`}>
                        <Text style={tw`text-white text-2xl font-bold`}>Get Started</Text>
                    </Link>
                </View>
            </ImageBackground>
        </>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    backLink: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 10,
    },
});

export default MyComponent;
