import React, {FC, useRef, useState} from "react";
import LottieView from "lottie-react-native";
import {TouchableOpacity} from "react-native-ui-lib";
import {StyleSheet} from "react-native";
import {impactAsync, ImpactFeedbackStyle} from 'expo-haptics';

export const Like: FC<{}> = ({onPress}) => {
    const [liked, setLiked] = useState(false)
    const lottieRef = useRef()
    const source = require('../../../assets/lottie/heart.json')

    const handlePress = async () => {
        if (liked) {
            lottieRef.current.reset()
            setLiked(false)
            onPress?.(value => value - 1)
        } else {
            lottieRef.current.play()
            setLiked(true)
            onPress?.(value => value + 1)
        }

        await impactAsync(ImpactFeedbackStyle.Light);
    }

    return (
        <TouchableOpacity activeOpacity={0.95} onPress={handlePress}>
            <LottieView
                ref={lottieRef}
                source={source}
                loop={false}
                speed={2.3}
                style={styles.lottie}
            />
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    lottie: {
        width: 60,
        height: 60,
    }
});
