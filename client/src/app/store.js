import { configureStore } from '@reduxjs/toolkit';
import { calendarFormReducer } from '../features/calendarForm/calendarFormSlice';

const store = configureStore({
    reducer: {
        calendarForm: calendarFormReducer
    }
});

export default store;