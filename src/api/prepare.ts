import {fetchBaseQuery} from '@reduxjs/toolkit/query';

import {ACCESS_KEY, API_URL} from "../constants";

export const customBaseQuery = (baseUrl: string | undefined = API_URL): ReturnType<typeof fetchBaseQuery> => {
    return fetchBaseQuery({baseUrl, prepareHeaders});
};

export const prepareHeaders = async (headers: Headers) => {
    headers.set('Authorization', `Client-ID ${ACCESS_KEY}`);
    return headers;
};

export default prepareHeaders;
