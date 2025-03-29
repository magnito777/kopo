//reactnative expo page with webview
import { WebView } from "react-native-webview";

export default function Page() {    
    return (
        <WebView
            source={{ uri: "https://oaotafractureapp.onrender.com/form" }} 
            style={{ flex: 1 }}
        />
    );
}