import { JSX, useState } from 'react';

import { parse } from 'date-fns';

import { useAppSelector } from '@/app/hooks';
import { selectCalendarForm } from '@/features/calendarForm/calendarFormSlice';
import { IHomePageFormValues } from '@/types';
import { CalendarForm } from '@book/CalendarForm';
import { FormDataList } from '@book/FormDataList';
import { RoomSelect } from '@book/RoomSelect';
import { Flex } from '@chakra-ui/react';

export const StepContent1 = (): JSX.Element => {
    const { checkIn, checkOut, adult } = useAppSelector(selectCalendarForm);
    const parsedData = {
        checkIn: checkIn ? parse(checkIn, 'dd.MM.yyyy', new Date()) : null,
        checkOut: checkOut ? parse(checkOut, 'dd.MM.yyyy', new Date()) : null,
        adult: adult,
    };

    const [values, setFormValues] = useState<IHomePageFormValues>(parsedData);

    return (
        <Flex direction='column'>
            <Flex wrap='wrap' gap='3'>
                <CalendarForm values={values} onFormUpdate={setFormValues} />
                <FormDataList values={values} />
            </Flex>
            <RoomSelect />
        </Flex>
    );
};
