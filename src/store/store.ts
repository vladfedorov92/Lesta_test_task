import {configureStore} from '@reduxjs/toolkit'
import vehicleSlice from "../slices/vehicleSlice";
import filterSlice from "../slices/filterSlice";

export const store = configureStore({
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    reducer: {
        vehicle: vehicleSlice,
        filter: filterSlice
    },
})


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;