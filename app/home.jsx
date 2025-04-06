import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import tw from 'twrnc';
import { Stack, Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const MyComponent = () => {
    const topics = [
        'Orthopaedic Basic Science',
        'Orthopaedic Trauma',
        'Orthopaedic Pathology',
        'Orthopaedic Paediatrics',
        'Upper Limb',
        'Lower Limb',
        'Spine',
        'Foot and Ankle',
        'Hand and Wrist',
    ];

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
                resizeMode="cover"
            >
                <Link href="/" style={styles.backLink}>
                    <Ionicons name="chevron-back" size={50} color="#5B9BD5" />
                </Link>

                <View style={tw`flex-1 w-full bg-black/30 pt-24 px-4`}>
                    <ScrollView contentContainerStyle={tw`items-center pb-10`}>
                        <Text style={tw`text-white text-xl font-bold text-center mb-6`}>
                            Orthopaedic Reference Topics will be available in the future.
                            {'\n'}Please check back later.
                        </Text>

                        {topics.map((topic, index) => (
                            <View
                                key={index}
                                style={tw`bg-white w-full rounded-2xl shadow-md p-4 mb-4`}
                            >
                                <Text style={tw`text-center text-base text-gray-800 font-semibold`}>
                                    {topic}
                                </Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </ImageBackground>
        </>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
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
