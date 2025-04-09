import { AxiosError } from 'axios';

import type { RootState } from '@/app/store';
import { IHomePageFormValues } from '@/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Action, PayloadAction } from '@reduxjs/toolkit';

import { getCalendarData, postCalendarData } from './calendarFormAPI';

interface IinitialCalendarForm {
    checkIn: string;
    checkOut: string;
    adult: string;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}
export const initialCalendarForm: IinitialCalendarForm = {
    checkIn: '',
    checkOut: '',
    adult: '2',
    status: 'idle',
    error: null,
};

export const loadCalendarData = createAsyncThunk<
    IinitialCalendarForm,
    void,
    { rejectValue: string }
>('calendarForm/loadCalendarData', async (_, { rejectWithValue }) => {
    try {
        return await getCalendarData();
    } catch (error) {
        const axiosError = error as AxiosError<{ message?: string }>;
        return rejectWithValue(
            axiosError.response?.data?.message || 'Ошибка загрузки данных',
        );
    }
});

export const sendCalendarData = createAsyncThunk<
    IinitialCalendarForm,
    IHomePageFormValues,
    { rejectValue: string }
>('calendarForm/saveCalendarData', async (data, { rejectWithValue }) => {
    try {
        return await postCalendarData(data);
    } catch (error) {
        const axiosError = error as AxiosError<{ message?: string }>;
        return rejectWithValue(
            axiosError.response?.data?.message || 'Ошибка отправки данных',
        );
    }
});

const calendarFormSlice = createSlice({
    name: 'calendarForm',
    initialState: initialCalendarForm,
    reducers: {
        setFormData: (
            state,
            action: PayloadAction<{
                checkIn: string;
                checkOut: string;
                adult: string;
            }>,
        ) => {
            state.checkIn = action.payload.checkIn;
            state.checkOut = action.payload.checkOut;
            state.adult = action.payload.adult;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(loadCalendarData.pending, state => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loadCalendarData.fulfilled, (state, action) => {
                state.checkIn = action.payload.checkIn;
                state.checkOut = action.payload.checkOut;
                state.adult = action.payload.adult;
                state.status = 'succeeded';
            })
            .addCase(sendCalendarData.fulfilled, () => {
                console.log('Данные успешно сохранены');
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.error = action.payload;
                state.status = 'failed';
            });
    },
});

const isError = (action: Action) => {
    return action.type.endsWith('rejected');
};

export const { setFormData } = calendarFormSlice.actions;
export const selectCalendarForm = (state: RootState) => state.calendarForm;
export const calendarFormReducer = calendarFormSlice.reducer;
