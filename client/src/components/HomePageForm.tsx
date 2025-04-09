import { JSX } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import { format, parse } from 'date-fns';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import {
    selectCalendarForm,
    setFormData,
} from '@/features/calendarForm/calendarFormSlice';
import { IHomePageFormValues } from '@/types';
import { Flex } from '@chakra-ui/react';
import { Btn } from '@components/ButtonItems';
import { DateInput, NumberInput } from '@components/InputItems';

export const HomePageForm = (): JSX.Element => {
    const ns = ['initialForm'];
    const { t } = useTranslation(ns);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { checkIn, checkOut, adult } = useAppSelector(selectCalendarForm);
    const parsedData = {
        checkIn: checkIn ? parse(checkIn, 'dd.MM.yyyy', new Date()) : null,
        checkOut: checkOut ? parse(checkOut, 'dd.MM.yyyy', new Date()) : null,
        adult: adult,
    };

    const {
        control,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<IHomePageFormValues>({
        mode: 'onChange',
        defaultValues: parsedData,
    });

    const formValues = watch();

    const onSubmit: SubmitHandler<IHomePageFormValues> = data => {
        const formattedData = {
            checkIn: data.checkIn ? format(data.checkIn, 'dd.MM.yyyy') : '',
            checkOut: data.checkOut ? format(data.checkOut, 'dd.MM.yyyy') : '',
            adult: data.adult,
        };

        dispatch(setFormData(formattedData));
        navigate('/book');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Flex
                gap={{ base: '3', md: '6' }}
                align={{ base: 'center', md: 'end' }}
                direction={{ base: 'column', md: 'row' }}
            >
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
                <NumberInput
                    control={control}
                    errors={errors}
                    name='adult'
                    labelText={t('adult')}
                    requiredText={t('requiredAdult')}
                    errorMinText={t('errorMinAdult')}
                    errorMaxText={t('errorMaxAdult')}
                />
                <Btn type='submit'>{t('button')}</Btn>
            </Flex>
        </form>
    );
};
