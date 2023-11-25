import { configureStore } from '@reduxjs/toolkit';
import {ticketsReducer} from './reducers/ticketsReducer'
const store = configureStore({
    reducer:{
        tickets:ticketsReducer,
        
    }
})

export default store