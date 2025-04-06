import { WebView } from "react-native-webview";
import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import tw from 'twrnc';
import { Stack } from "expo-router";
import { Link } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function Page() {    
    const [key, setKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setKey(prevKey => prevKey + 1); // Update the key to force WebView to reload
        }, 30000); // 10 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <Stack.Screen 
                options={{
                    headerShown: false,
                    animation: 'none'
                }} 
            />
            <WebView
                key={key} // Use the key to force re-render
                source={{ uri: "https://oaotafractureapp.onrender.com/result" }} 
                style={{ flex: 1 }}
            />
            <View style={[styles.fab, tw`justify-center items-center`]}>
                <Link 
                    href="../modal" 
                    style={tw`px-6 py-3 rounded-full bg-green-600`} 
                    accessibilityRole="button" 
                    accessibilityLabel="Add"
                    accessibilityHint="Navigates to the modal page"
                >
                    <Text style={tw `text-6xl font-bold text-white`} accessible={true}>
                        +
                    </Text>
                </Link>
            </View>     
        </View>
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
        width: 80,
        height: 80,
        borderRadius: 100,
        right: 20,
        bottom: 20,
    },
    backLink: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 20,
    },
});