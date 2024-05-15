import _ from 'lodash/fp';
import React, {useEffect, useState, useCallback} from "react";
import {StyleSheet, FlatList} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {RefreshControl} from 'react-native-gesture-handler';

import {UIView} from "../../../components/UIView";

import {useGetPhotoByIdQuery, useGetPhotosQuery} from "../../../api/api";
import {UIText} from "../../../components/UIText";
import {useNavigation, useRoute} from "@react-navigation/native";
import {Image} from "expo-image";
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../../constants";
import {ListFooterLoader} from "../components/ListFooterLoader";
import LottieView from "lottie-react-native";
import {BackButton} from "../../../components/BackButton";



// const PostsSkeleton = () => {
//     return (
//         <UIView flex>
//         <UIView br50 marginV-20 marginH-20 padding-20 backgroundColor={'#efefef'}>
//         <UIView br50 height={200} backgroundColor={'#fff'} />
//     <UIView marginT-15 br50 height={20} backgroundColor={'#fff'} />
//     <UIView marginT-15 row>
//     <UIView flex br50 height={20} backgroundColor={'#fff'} />
//     <UIView marginL-40 flex br50 height={20} backgroundColor={'#fff'} />
//     </UIView>
//     </UIView>
//     <UIView br50 marginV-20 marginH-20 padding-20 backgroundColor={'#efefef'}>
//         <UIView br50 height={200} backgroundColor={'#fff'} />
//     <UIView marginT-15 br50 height={20} backgroundColor={'#fff'} />
//     <UIView marginT-15 row>
//     <UIView flex br50 height={20} backgroundColor={'#fff'} />
//     <UIView marginL-40 flex br50 height={20} backgroundColor={'#fff'} />
//     </UIView>
//     </UIView>
//     <UIView br50 marginV-20 marginH-20 padding-20 backgroundColor={'#efefef'}>
//         <UIView br50 height={200} backgroundColor={'#fff'} />
//     <UIView marginT-15 br50 height={20} backgroundColor={'#fff'} />
//     <UIView marginT-15 row>
//     <UIView flex br50 height={20} backgroundColor={'#fff'} />
//     <UIView marginL-40 flex br50 height={20} backgroundColor={'#fff'} />
//     </UIView>
//     </UIView>
//     </UIView>
// );
// };

export const ViewPhotoScreen = ({}) => {
    const {id = ''} = useRoute()?.params
    const {top} = useSafeAreaInsets()
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
    // contentContainer: {
    //     position: 'absolute',
    //     bottom: 0,
    //     left: 0,
    //     right: 0,
    //     borderTopLeftRadius: 10,
    //     borderTopRightRadius: 10,
    //     backgroundColor: 'rgba(255,255,255,0.8)',
    //     padding: 20
    // }
});
