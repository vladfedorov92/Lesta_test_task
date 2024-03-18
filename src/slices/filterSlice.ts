import {createSlice} from "@reduxjs/toolkit";
import {FilterPayload} from "../constants/constants";


const initialState: FilterPayload = {
    levels: [],
    nations: [],
    types: []
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        changeFilterLevels: (state, action) => {
           if (state.levels.includes(parseInt(action.payload))) {
                state.levels = state.levels.filter(item => item !== parseInt(action.payload));
                }
            else{
                state.levels.push(parseInt(action.payload));
            }
        },
        changeFilterNations: (state, action) => {
            if (state.nations.includes(action.payload)) {
                state.nations = state.nations.filter(item => item !== action.payload);
                }
            else{
                state.nations.push(action.payload);
            }
        },
        changeFilterTypes: (state, action) => {
            if (state.types.includes(action.payload)) {
                state.types = state.types.filter(item => item !== action.payload);
                }
            else{
                state.types.push(action.payload);
            }
        },
        resetFilters: (state) => {
            state.levels.splice(0, state.levels.length);
            state.nations.splice(0, state.nations.length);
            state.types.splice(0, state.types.length);
        }
    }
});
export const {changeFilterLevels, changeFilterTypes, changeFilterNations, resetFilters} = filterSlice.actions;
export default filterSlice.reducer;