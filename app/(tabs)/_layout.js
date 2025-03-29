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
                    <Tabs>
                        <Tabs.Screen
                            name="form"
                            options={{
                                title: 'Form',
                                tabBarIcon: () => <AntDesign name="form" size={24} color="black" />
                            }}
                        />
                        <Tabs.Screen
                            name="data"
                            options={{
                                title: 'Data',
                                tabBarIcon: () => <Feather name="database" size={24} color="black" />
                            }}
                        />
                        <Tabs.Screen
                            name="about"
                            options={{
                                title: 'About',
                                tabBarIcon: () => <FontAwesome6 name="contact-card" size={24} color="black" />
                            }}
                        />
                    </Tabs>
                </View>
            </GestureHandlerRootView>
           
            );
        }
