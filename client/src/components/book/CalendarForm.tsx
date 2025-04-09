import { JSX, useEffect } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { format } from 'date-fns';

import { useAppDispatch } from '@/app/hooks';
import { setFormData } from '@/features/calendarForm/calendarFormSlice';
import { IHomePageFormValues } from '@/types';
import { Flex } from '@chakra-ui/react';
import { Btn } from '@components/ButtonItems';
import { DateInput, NumberInput } from '@components/InputItems';

interface ICalendarFormProps {
    onFormUpdate: (data: IHomePageFormValues) => void;
    values: IHomePageFormValues;
}
export const CalendarForm = ({
    onFormUpdate,
    values,
}: ICalendarFormProps): JSX.Element => {
    const ns = ['initialForm'];
    const { t } = useTranslation(ns);
    const dispatch = useAppDispatch();

    const {
        control,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<IHomePageFormValues>({
        mode: 'onChange',
        defaultValues: values,
    });

    const formValues = watch();

    useEffect(() => {
        const subscription = watch(value => {
            onFormUpdate(value as IHomePageFormValues);
        });
        return () => subscription.unsubscribe();
    }, [watch, onFormUpdate]);

    const onSubmit: SubmitHandler<IHomePageFormValues> = data => {
        const formattedData = {
            checkIn: data.checkIn ? format(data.checkIn, 'dd.MM.yyyy') : '',
            checkOut: data.checkOut ? format(data.checkOut, 'dd.MM.yyyy') : '',
            adult: data.adult,
        };

        dispatch(setFormData(formattedData));
    };

    return (
        <Flex flex='1'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Flex gap='6' wrap={{ mdDown: 'wrap' }}>
                    <DateInput
                        control={control}
                        errors={errors}
                        name='checkIn'
                        formValues={formValues}
                        labelText={t('checkIn')}
                        requiredText={t('requiredCheckIn')}
                        stayText={t('minStay')}
                        tooltipText={t('closeTooltip')}
                    />
                    <DateInput
                        control={control}
                        errors={errors}
                        name='checkOut'
                        formValues={formValues}
                        labelText={t('checkOut')}
                        requiredText={t('requiredCheckOut')}
                        stayText={t('minStay')}
                        tooltipText={t('closeTooltip')}
                    />
                </Flex>
                <Flex gap='6' mt='3'>
                    <NumberInput
                        control={control}
                        errors={errors}
                        name='adult'
                        labelText={t('adult')}
                        requiredText={t('requiredAdult')}
                        errorMinText={t('errorMinAdult')}
                        errorMaxText={t('errorMaxAdult')}
                    />
                </Flex>
                <Flex gap='6' mt='3'>
                    <Btn type='submit'>{t('button')}</Btn>
                </Flex>
            </form>
        </Flex>
    );
};
