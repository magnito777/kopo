//reactnative expo page with webview
import { WebView } from "react-native-webview";
import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import tw from 'twrnc';
import { Stack } from "expo-router";
import { Link } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
export default function Page() {    
    return (

<>
            <Stack.Screen 
                options={{
                    headerShown: false,
                    animation: 'none'
                }} 
            />

          
              
                <WebView
            source={{ uri: "https://oaotafractureapp.onrender.com/result" }} 
            style={{ flex: 1 }}
        />
               
            
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





       
   