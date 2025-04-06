import * as React from "react";
import { Stack } from 'expo-router';

export default function Layout({ children }) {
  return (
    <Stack 
    screenOptions={{
      headerShown: false,
      animation: 'none',
      title: ''  // This removes the title/header text
    }}
  >
      <Stack.Screen name="index" options={{ headerShown: false,  }} />
      <Stack.Screen name="home" options={{ headerShown: false,  }} />
      <Stack.Screen name="modal"options={{headerShown: false,  presentation: 'transparentModal', animation: 'fade', }}/>
      <Stack.Screen name="(tabs)" options={{ headerShown: false,}} />
    </Stack>
  );
}