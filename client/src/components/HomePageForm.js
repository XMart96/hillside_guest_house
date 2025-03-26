import { Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { Btn } from '@components/elements';
import { format, parse } from "date-fns";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectCalendarForm, setFormData } from '../features/calendarForm/calendarFormSlice';
import DateInput from '@components/DateInput';
import NumberInput from '@components/NumberInput';

const HomePageForm = () => {
    const navigate = useNavigate();
    const { t } = useTranslation(['initialForm']);
    const dispatch = useDispatch();

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
    const watchCheckIn = watch("checkIn");
    const watchCheckOut = watch("checkOut");

    const onSubmit = handleSubmit(data => {
        const formattedData = {
            ...data,
            checkIn: format(new Date(data.checkIn), 'dd-MM-yyyy'),
            checkOut: format(new Date(data.checkOut), 'dd-MM-yyyy')
        }

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