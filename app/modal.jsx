import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ActivityIndicator, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import Animated, { FadeIn, SlideInDown } from 'react-native-reanimated';
import { WebView } from "react-native-webview";
import tw from 'twrnc';

export default function BoneFractureForm() {
    const [loading, setLoading] = useState(true);

    return (
        <Animated.View entering={FadeIn} style={{ flex: 1, backgroundColor: '#00000040' }}>
            {/* Navigation */}
            <Link href="../(tabs)/data" style={tw`absolute top-4 right-4 z-10`}>
                <Text style={tw`text-grey-700 text-3xl font-bold`}>X</Text>
            </Link>

            {/* Dismiss modal when pressing outside */}
            <Link href={'../(tabs)/data'} asChild>
                <Pressable style={StyleSheet.absoluteFill} />
            </Link>

            <Animated.View
                entering={SlideInDown}
                style={{
                    width: '90%',
                    height: '90%',
                    alignSelf: 'center',
                    marginTop: 50,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    overflow: 'hidden',
                }}
            >
                {/* Show loading animation while WebView is loading */}
                {loading && (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                )}

                <WebView
                    source={{ uri: "https://oaotafractureapp.onrender.com/form" }}
                    style={{ flex: 1 }}
                    onLoadStart={() => setLoading(true)}
                    onLoadEnd={() => setLoading(false)}
                />
            </Animated.View>
        </Animated.View>
    );
}
