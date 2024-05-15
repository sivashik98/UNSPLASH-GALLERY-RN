import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {api} from "../api/api";

const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})

export type RootStateType = ReturnType<typeof rootReducer>
export type AppStoreType = ReturnType<typeof store>
export type AppDispatch = AppStoreType['dispatch']
