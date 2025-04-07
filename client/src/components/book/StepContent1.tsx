import { Flex } from '@chakra-ui/react';
import { CalendarForm } from '@book/CalendarForm';
import { RoomSelect } from '@book/RoomSelect';
import { FormDataList } from '@book/FormDataList';
import { JSX, useState } from 'react';
import { IHomePageFormValues } from '@/types';

export const StepContent1 = (): JSX.Element => {
    const [values, setFormValues] = useState<IHomePageFormValues>({
        checkIn: null,
        checkOut: null,
        adult: '2',
    });

    return (
        <Flex direction='column'>
            <Flex wrap='wrap' gap='3'>
                <CalendarForm onFormUpdate={setFormValues} />
                <FormDataList formValues={values} />
            </Flex>
            <RoomSelect />
        </Flex>
    );
};
