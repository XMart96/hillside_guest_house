import { Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { format, parse, isBefore } from "date-fns";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Btn } from '@components/elements';
import { selectCalendarForm, setFormData } from '../features/calendarForm/calendarFormSlice';
import DateInput from '@components/DateInput';
import NumberInput from '@components/NumberInput';
import logger from '@/logger';

const HomePageForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const ns = ['initialForm'];
    const { t, i18n } = useTranslation(ns);
    ns.forEach(n => !i18n.hasResourceBundle(i18n.language, n) && logger('assert', '104', n));

    const initialFormData = useSelector(selectCalendarForm);
    const {checkIn: storedCheckIn, checkOut: storedCheckOut} = initialFormData;

    const { handleSubmit, formState: { errors }, control, watch } = useForm({ 
        mode: 'onChange', 
        defaultValues: {
            ...initialFormData,
            checkIn: storedCheckIn ? parse(storedCheckIn, 'dd-MM-yyyy', new Date()): null,
            checkOut: storedCheckOut ? parse(storedCheckOut, 'dd-MM-yyyy', new Date()) : null
        }
    });

    !control && logger('assert', '106');

    const watchCheckIn = watch("checkIn");
    const watchCheckOut = watch("checkOut");

    const onSubmit = handleSubmit(data => {
        const checkInDate = new Date(data.checkIn);
        const checkOutDate = new Date(data.checkOut);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (isBefore(checkOutDate, checkInDate)) {
            logger('error', '204');
            return;
        }
        if (isBefore(checkInDate, today)) {
            logger('error', '205');
            return;
        }
        const formattedData = {
            ...data,
            checkIn: format(checkInDate, 'dd-MM-yyyy'),
            checkOut: format(checkOutDate, 'dd-MM-yyyy')
        };

        dispatch(setFormData(formattedData));
        navigate('/book');
    });
    
    return (
        <form onSubmit={onSubmit} style={{ width: '100%' }}>
            <Flex 
                gap={{ base: '5', md: '8' }} 
                align={{ base: 'center', md: 'end' }} 
                direction={{ base: 'column', md: 'row' }}
            >
                <DateInput 
                    inputName='checkIn' 
                    control={control} 
                    errors={errors} 
                    checkInValue={watchCheckIn} 
                    checkOutValue={watchCheckOut} 
                />
                <DateInput 
                    inputName='checkOut'
                    control={control} 
                    errors={errors} 
                    checkInValue={watchCheckIn} 
                    checkOutValue={watchCheckOut} 
                />
                <NumberInput 
                    inputName='adult'
                    control={control} 
                    errors={errors} 
                />
                <Btn type="submit">
                    {t('button')}
                </Btn>
            </Flex>
        </form>
    );
};

export default HomePageForm;