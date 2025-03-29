import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import tw from 'twrnc';
import { Link, Stack } from 'expo-router';


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
                source={require('../assets/images/bones/splash.png')}
                style={styles.background}
            >
                <View style={tw`flex-1 justify-center items-center z-10`}>
                    <Link href="home" style={tw`px-12 py-6 rounded-full bg-[#843C0C] mt-80`}>
                        <Text style={tw`text-white text-2xl font-bold`}>Get Started</Text>
                    </Link>
                </View>
                <View style={[styles.fab, tw`justify-center items-center`]}>
                    <Link href="/(tabs)/data" style={tw`px-12 py-6 rounded-full bg-[#843C0C]`}>
                        <Text style={tw`text-white text-lg font-bold pt-4`}>data</Text>
                        <Text style={tw`text-white text-4xl font-bold pb-4`}>+</Text>
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
    fab: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#D81B60',
        right: 20,
        bottom: 20,
    },
});

export default MyComponent;
