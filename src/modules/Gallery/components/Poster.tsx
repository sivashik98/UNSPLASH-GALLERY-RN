import React, {memo, useEffect, useState} from "react";
import {StyleSheet} from "react-native";
import {TouchableOpacity} from "react-native-ui-lib";
import {Image} from "expo-image";
import {useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";
import {useNavigation} from "@react-navigation/native";

import {UIView} from "../../../components/UIView";
import {UIText} from "../../../components/UIText";
import {PressToDownscale} from "../../../components/PressToDownscale";
import {Like} from "../../../components/Like";

export const Poster = memo(({poster = {}}) => {
    const {navigate} = useNavigation()
    const rendered = useSharedValue(false)
    const {likes = 0, urls = {}, user = {}, alt_description = '', id} = poster
    const {full, raw, regular} = urls
    const [likesCount, setLikesCount] = useState(likes)
    const author = `${user.first_name || ''} ${user.last_name || ''}`

    useEffect(() => {
        rendered.value = true
    }, [])

    const animatedStyles = useAnimatedStyle(() => ({
        opacity: rendered.value ? withTiming(1, {duration: 500}) : 0.8,
        transform: [{scale: rendered.value ? withTiming(1, {duration: 500}) : 0.8}]
    }))

    return (
        <PressToDownscale>
            <UIView reanimated style={animatedStyles}>
                <TouchableOpacity activeOpacity={0.95} onPress={() => navigate('ViewPhoto', {id})} style={styles.container}>
                    <Image source={regular} style={styles.image} />

                    <UIText marginT-10 style={styles.descriptionText}>{alt_description}</UIText>

                    <UIView row spread centerV>
                        <UIView row center marginR-20>
                            <Like onPress={setLikesCount} />
                            <UIText style={styles.likesText}>{likesCount} likes</UIText>
                        </UIView>

                        <UIText numberOfLines={1} style={styles.authorText}>{author}</UIText>
                    </UIView>
                </TouchableOpacity>
            </UIView>
        </PressToDownscale>

    )
})


const styles = StyleSheet.create({
    container: {
        padding: 20,
        margin: 6,
        elevation: 4,
        shadowRadius: 10,
        shadowOpacity: 0.1,
        shadowColor: '#181818',
        shadowOffset: {height: 4, width: 0},
        backgroundColor: '#fff',
        borderRadius: 12,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    likesText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#181818',
    },
    authorText: {
        fontSize: 20,
        color: '#7D8287',
    },
    descriptionText: {
        fontSize: 14,
        color: '#A8AFB7',
    }
});
