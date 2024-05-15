import {GestureHandlerRootView} from "react-native-gesture-handler";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Provider} from "react-redux";
import {useState} from 'react'

import {Splash} from "./src/components/Splash";

import {RootNavigation} from "./src/navigation/Root";

import {store} from "./src/store/store";

const InnerApp = () => {
    const [isReady, setIsReady] = useState(false)

    if (!isReady) return <Splash setIsReady={setIsReady} />

    return (
        <RootNavigation/>
    );
}

export default function App() {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <SafeAreaProvider>
                <Provider store={store}>
                    <InnerApp/>
                </Provider>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    );
}
