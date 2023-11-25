import { createReducer } from "@reduxjs/toolkit";
const initialState = {};

export const ticketsReducer = createReducer(initialState , {
    FETCH_DATA:(state)=>{
        state.loading = true;
    },
    FETCH_DATA_SUCCESS: (state , action) => {
        state.loading = false;
        state.rawdata = action.data;
        state.users = action.users;
    },
    SET_FILTERED_DATA :(state,action)=>{
        state.data = action.data
        state.labels = action.labels
        state.groupedBy = action.groupedBy
    }

})