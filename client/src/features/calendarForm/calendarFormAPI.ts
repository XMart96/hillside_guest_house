import axios from 'axios';

import { IHomePageFormValues } from '@/types';

export const getCalendarData = async () => {
    try {
        const res = await axios.get('/getCalendarData');
        return res.data;
    } catch (error) {
        console.error('Error fetching calendar data:', error);
        throw error;
    }
};

export const postCalendarData = async (data: IHomePageFormValues) => {
    try {
        const res = await axios.post(`/postCalendarData`, data);
        return res.data;
    } catch (error) {
        console.error('Error posting calendar data:', error);
        throw error;
    }
};
