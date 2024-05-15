import React, {FC} from "react";
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";

import {UIView} from "../UIView";

export const PressToDownscale: FC<{}> = ({children}) => {
    const pressed = useSharedValue(false);
    const tap = Gesture.Tap()
        .onBegin(() => {
            pressed.value = true;
        })
        .onFinalize(() => {
            pressed.value = false;
        });
    const pressedStyle = useAnimatedStyle(() => ({
        transform: [{scale: withTiming(pressed.value ? 0.97 : 1)}],
    }));

    return (
        <GestureDetector gesture={tap}>
            <UIView reanimated style={pressedStyle}>
                {children}
            </UIView>
        </GestureDetector>
    )
};
