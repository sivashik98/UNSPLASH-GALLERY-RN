import _ from 'lodash/fp';
import {useEffect, useState, useCallback} from "react";
import {StyleSheet, FlatList} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {RefreshControl} from 'react-native-gesture-handler';

import {UIView} from "../../components/UIView";
import {Poster} from "./components/Poster";
import {ListFooterLoader} from "./components/ListFooterLoader";

import {useGetPhotosQuery} from "../../api/api";

const keyExtractor = (data: {}[]) => data?.id;

const renderItem = ({item, index}) => {
    return (
        <UIView
            marginT-20={index <= 0}
            marginB-20={index > 0}
        >
            <Poster poster={item} />
        </UIView>
    )
}

const PostsSkeleton = () => {
    const {top} = useSafeAreaInsets()

    return (
        <UIView flex backgroundColor={'#fff'} style={{paddingTop: top}}>
            <UIView br50 marginV-20 marginH-20 padding-20 backgroundColor={'#efefef'}>
                <UIView br50 height={200} backgroundColor={'#fff'} />
                <UIView marginT-15 br50 height={20} backgroundColor={'#fff'} />
                <UIView marginT-15 row>
                    <UIView flex br50 height={20} backgroundColor={'#fff'} />
                    <UIView marginL-40 flex br50 height={20} backgroundColor={'#fff'} />
                </UIView>
            </UIView>
            <UIView br50 marginV-20 marginH-20 padding-20 backgroundColor={'#efefef'}>
                <UIView br50 height={200} backgroundColor={'#fff'} />
                <UIView marginT-15 br50 height={20} backgroundColor={'#fff'} />
                <UIView marginT-15 row>
                    <UIView flex br50 height={20} backgroundColor={'#fff'} />
                    <UIView marginL-40 flex br50 height={20} backgroundColor={'#fff'} />
                </UIView>
            </UIView>
            <UIView br50 marginV-20 marginH-20 padding-20 backgroundColor={'#efefef'}>
                <UIView br50 height={200} backgroundColor={'#fff'} />
                <UIView marginT-15 br50 height={20} backgroundColor={'#fff'} />
                <UIView marginT-15 row>
                    <UIView flex br50 height={20} backgroundColor={'#fff'} />
                    <UIView marginL-40 flex br50 height={20} backgroundColor={'#fff'} />
                </UIView>
            </UIView>
        </UIView>
    );
};

export const Gallery = () => {
    const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
    const [page, setPage] = useState(1)
    const [items, setItems] = useState<object[]>([]);
    const {top} = useSafeAreaInsets()
    const {data, isLoading, isFetching, isSuccess, isError, error, refetch} = useGetPhotosQuery({page})

    useEffect(() => {
        if (!isLoading || !isFetching) {
            setItems(prevData =>  _.compose(_.uniqBy('id'), _.concat(prevData))(data || []))
            setIsRefreshing(false)
        }
    }, [data, isLoading, isFetching])

    const getMoreItems = useCallback(() => {
        if (isLoading || isFetching) return null
        setPage(value => value + 1)
    }, [isLoading, isFetching])

    const refresh = useCallback(() => {
        setIsRefreshing(true);
        setItems([]);
        setPage(1);
        refetch()
        if (items.length <= 10) setIsRefreshing(false);
    }, [])

    if (isLoading) return <PostsSkeleton />

    console.log('render')

    return (
        <FlatList
            data={items}
            renderItem={renderItem}
            onEndReachedThreshold={0.2}
            keyExtractor={keyExtractor}
            onEndReached={getMoreItems}
            refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={refresh} />}
            ListFooterComponent={isFetching && items.length ? ListFooterLoader : undefined}
            style={[styles.container, {paddingTop: top}]}
        />
    )
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    },
});
