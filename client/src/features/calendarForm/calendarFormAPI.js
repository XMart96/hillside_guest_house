export const fetchCalendarData = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({
                checkIn: '29-03-2025',
                checkOut: '03-03-2025',
                adult: 5
            });
        }, 3000);
    });
};