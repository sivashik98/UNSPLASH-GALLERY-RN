import React, {FC} from "react";
import {TouchableOpacity} from "react-native-ui-lib";
import {StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Image} from "expo-image";

export const BackButton: FC<{}> = ({}) => {
    const {goBack} = useNavigation()
    const source = require('../../../assets/png/back-button.png')

    return (
        <TouchableOpacity activeOpacity={0.95} onPress={goBack} style={styles.container}>
            <Image source={source} style={styles.image} />
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderRadius: 100,
        padding: 10
    },
    image: {
        width: 30,
        height: 30,
    }
});
