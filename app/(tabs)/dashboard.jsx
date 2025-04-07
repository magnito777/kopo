import React from 'react';
// Removed unused imports
import { Stack } from "expo-router";
import WebView from 'react-native-webview';

class App extends React.Component {
  render() {
    return (
      <>
        <Stack.Screen 
          options={{
            headerShown: false,
            animation: 'none'
          }} 
        />
        <WebView
          source={{ uri: "https://oaotafractureapp.onrender.com/dashboard" }} 
          style={{ flex: 1 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          scalesPageToFit={true}
          allowFileAccess={true}
          allowUniversalAccessFromFileURLs={true}
        />
      </>
    );
  }
}

export default App;
