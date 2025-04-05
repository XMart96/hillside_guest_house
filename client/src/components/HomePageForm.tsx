import { IHomePageFormValues } from '@/types';
import { Flex } from '@chakra-ui/react';
import { DateInput, NumberInput } from '@components/InputItems';
import { SubmitButton } from '@components/ButtonItems';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { JSX } from 'react';

export const HomePageForm = (): JSX.Element => {
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

    const onSubmit: SubmitHandler<IHomePageFormValues> = data => {
        console.log(data);
        reset();
    };

    return (
        <Flex
            bg='wht'
            position='absolute'
            color='gry'
            w={{ base: 'inherit', md: '95%' }}
            bottom='10'
            left='calc(50% - 12px)'
            transform='translateX(-50%)'
            maxW='700px'
            p='5'
            m='3'
            shadow='0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            rounded='lg'
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Flex
                    gap={{ base: '5', md: '8' }}
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
                    <SubmitButton type='submit'>{t('button')}</SubmitButton>
                </Flex>
            </form>
        </Flex>
    );
};
