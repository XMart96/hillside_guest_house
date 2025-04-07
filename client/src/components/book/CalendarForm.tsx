import { IHomePageFormValues } from '@/types';
import { Flex } from '@chakra-ui/react';
import { DateInput, NumberInput } from '@components/InputItems';
import { Btn } from '@components/ButtonItems';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { JSX, useEffect } from 'react';

interface ICalendarFormProps {
    onFormUpdate: (data: IHomePageFormValues) => void;
}
export const CalendarForm = ({
    onFormUpdate,
}: ICalendarFormProps): JSX.Element => {
    const ns = ['initialForm'];
    const { t } = useTranslation(ns);

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
    } = useForm<IHomePageFormValues>({
        mode: 'onChange',
        defaultValues: { checkIn: null, checkOut: null, adult: '2' },
    });

    const formValues = watch();

    useEffect(() => {
        const subscription = watch(value => {
            onFormUpdate(value as IHomePageFormValues);
        });
        return () => subscription.unsubscribe();
    }, [watch, onFormUpdate]);

    const onSubmit: SubmitHandler<IHomePageFormValues> = data => {
        console.log(data);
        reset();
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
