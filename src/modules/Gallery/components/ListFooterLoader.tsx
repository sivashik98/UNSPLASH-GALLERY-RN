import React from "react";
import {StyleSheet} from "react-native";
import LottieView from "lottie-react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

import {UIView} from "../../../components/UIView";

export const ListFooterLoader = () => {
    const {bottom} = useSafeAreaInsets()
    const source = require('../../../../assets/lottie/loader.json')
    const marginBottom = bottom + 40

    return (
        <UIView center style={{marginBottom}}>
            <LottieView
                source={source}
                loop
                autoPlay
                style={styles.lottie}
            />
        </UIView>
    )
}


const styles = StyleSheet.create({
    lottie: {
        width: 80,
        height: 80,
    }
});
