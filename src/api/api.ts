import { createApi } from '@reduxjs/toolkit/query/react'

import {customBaseQuery} from "./prepare";
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../constants";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: customBaseQuery(),
    endpoints: (builder) => ({
        getPhotos: builder.query<Photo[], PhotoParams>({
            query: ({w = SCREEN_WIDTH, h = SCREEN_HEIGHT, per_page = 10, page}) => ({
                url: `/photos`,
                params: {per_page, w, h, page}
            })
        }),
        getPhotoById: builder.query<Photo[], PhotoParams>({
            query: ({w = SCREEN_WIDTH, h = SCREEN_HEIGHT, id}) => ({
                url: `/photos/${id}`,
                params: {w, h}
            })
        })
    })
})

export type Photo = {

}

type PhotoParams = {
    w: number,
    h: number,
    per_page: number,
    page: number
}

export const {useGetPhotosQuery, useGetPhotoByIdQuery} = api


