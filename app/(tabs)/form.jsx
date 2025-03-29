//reactnative expo page with webview
import { WebView } from "react-native-webview";
import { Stack } from "expo-router";
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
            source={{ uri: "https://oaotafractureapp.onrender.com/form" }} 
            style={{ flex: 1 }}
        />
        </>
    );
}