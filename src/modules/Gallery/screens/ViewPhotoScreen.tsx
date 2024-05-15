import React from "react";
import {StyleSheet} from "react-native";
import {Image} from "expo-image";
import {useRoute} from "@react-navigation/native";
import LottieView from "lottie-react-native";

import {UIView} from "../../../components/UIView";
import {BackButton} from "../../../components/BackButton";

import {useGetPhotoByIdQuery} from "../../../api/api";
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../../constants";

export const ViewPhotoScreen = ({}) => {
    const {id = ''} = useRoute()?.params
    const {data, isLoading, isFetching, isSuccess, isError, error, refetch} = useGetPhotoByIdQuery({id})
    const {urls = ''} = data || {}
    const source = require('../../../../assets/lottie/loader.json')


    return (
       <UIView flex backgroundColor={'#fff'}>
           <UIView center style={styles.loaderContainer}>
               <LottieView
                   source={source}
                   loop
                   autoPlay
                   style={styles.lottie}
               />
           </UIView>
           <UIView style={styles.backButton}><BackButton /></UIView>
           <Image
               source={urls.regular}
               style={styles.image}
               resizeMode={'stretch'}
           />
       </UIView>
    )
}


const styles = StyleSheet.create({
    loaderContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    lottie: {
        width: 80,
        height: 80,
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 2
    },
    image: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT
    },
});
