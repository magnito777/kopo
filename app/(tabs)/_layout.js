import * as React from "react";
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';
import { TouchableOpacity, GestureHandlerRootView } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';
export default function Layout() {
    const navigation = useNavigation(); // Moved this outside of JSX

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack.Screen 
                options={{
                    headerShown: false,
                    animation: 'none'
                }} 
            />
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => navigation.navigate('index')}>
                    <Ionicons name="chevron-back" size={60} color="#5B9BD5" />
                </TouchableOpacity>
                <Tabs
                    screenOptions={{
                        tabBarStyle: {
                            backgroundColor: 'linear-gradient(to right, blue, green)',
                            borderTopWidth: 0,
                            height: 80,
                        },
                        tabBarBackground: () => (
                            <View style={tw`flex-1 bg-green-500 absolute w-full h-full`}>
                                <View style={tw`flex-1 bg-blue-500`} />
                            </View>
                        ),
                        tabBarActiveTintColor: 'white',
                        tabBarInactiveTintColor: 'white',
                        tabBarIconStyle: {
                            size: 37,
                        },
                    }}
                >
                    <Tabs.Screen
                        name="form"
                        options={{
                            title: 'Form',
                            tabBarIcon: ({ color }) => <AntDesign name="form" size={40} color={color} />
                        }}
                    />
                    <Tabs.Screen
                        name="data"
                        options={{
                            title: 'Data',
                            tabBarIcon: ({ color }) => <Feather name="database" size={40} color={color} />
                        }}
                    />
                    <Tabs.Screen
                        name="about"
                        options={{
                            title: 'About',
                            tabBarIcon: ({ color }) => <FontAwesome6 name="contact-card" size={40} color={color} />
                        }}
                    />
                </Tabs>
            </View>
        </GestureHandlerRootView>
    );
        }
