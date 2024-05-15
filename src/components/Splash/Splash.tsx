import React, {FC} from "react";

import {UIView} from "../UIView";
import LottieView from "lottie-react-native";
import {useEffect, useRef} from "react";
import {StyleSheet} from "react-native";
import {Easing, runOnJS, useAnimatedStyle, useSharedValue, withSpring, withTiming} from "react-native-reanimated";


export const Splash: FC<{}> = ({setIsReady}) => {
    const loaded = useSharedValue(false)
    const animationRef = useRef()
    const source = require('../../../assets/lottie/splash.json')

    useEffect(() => {
        animationRef.current?.play(0, 52);
    }, []);

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [
            {scale: loaded.value ? withSpring(10) : 1},
            {translateY: loaded.value ? withTiming(-40) : 0}
        ],
        opacity: loaded.value ? withTiming(0, {}, () => runOnJS(setIsReady)(true)) : 1,
    }))

    return (
        <UIView reanimated center style={[styles.container, animatedStyles]}>
            <LottieView
                ref={animationRef}
                source={source}
                speed={1}
                loop={false}
                onAnimationFinish={() => loaded.value = true}
                style={styles.lottie}
            />
        </UIView>
    )
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

    lottie: {
        width: 300,
        height: 300,
    }
})
