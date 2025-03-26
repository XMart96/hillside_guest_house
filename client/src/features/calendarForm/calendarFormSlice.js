import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCalendarData } from "./calendarFormAPI";

export const initialCalendarForm = {
    checkIn: null,
    checkOut: null,
    adult: 2,
    children: 0
};

export const loadCurrentData = createAsyncThunk(
    'calendarForm/loadCurrentData', 
    async () => {
        const response = await fetchCalendarData();
        return response;
    }
);
  
const calendarFormSlice = createSlice({
    name: 'calendarForm',
    initialState: initialCalendarForm,
    reducers: {
        setFormData: (state, action) => {
            state.checkIn = action.payload.checkIn;
            state.checkOut = action.payload.checkOut;
            state.adult = action.payload.adult;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loadCurrentData.fulfilled, (state, action) => {
            state.checkIn = action.payload.checkIn;
            state.checkOut = action.payload.checkOut;
            state.adult = action.payload.adult;
        });
    }
});
  
export const { setFormData } = calendarFormSlice.actions;
export const selectCalendarForm = (state) => state.calendarForm;
export const calendarFormReducer = calendarFormSlice.reducer;