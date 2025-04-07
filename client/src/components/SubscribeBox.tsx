import { Heading, Box, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Btn } from '@components/ButtonItems';
import { LuMail } from 'react-icons/lu';
import { NewsletterInput } from '@components/InputItems';
import { INewsletterFormValues } from '@/types';
import { JSX } from 'react';

interface ISubscribeBoxProps {
    color: string;
}
export const SubscribeBox = ({ color }: ISubscribeBoxProps): JSX.Element => {
    const ns = ['subscribe'];
    const { t } = useTranslation(ns);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<INewsletterFormValues>({ mode: 'onChange' });

    const onSubmit: SubmitHandler<INewsletterFormValues> = data => {
        if (!data.newsletterEmail) {
            return;
        }
        if (
            !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,6}$/.test(
                data.newsletterEmail
            )
        ) {
            return;
        }
        console.log(data);
        reset();
    };

    return (
        <Box maxW='300px' color={color}>
            <Heading mb='3'>{t('subscribe')}</Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Flex direction='column' align='flex-start' gap='3'>
                    <NewsletterInput
                        register={register}
                        errors={errors}
                        name='newsletterEmail'
                        labelText={t('subscribeText')}
                        requiredText={t('inputRequired')}
                        errorText={t('inputError')}
                    />
                    <Btn type='submit'>
                        <LuMail /> {t('subscribeButton')}
                    </Btn>
                </Flex>
            </form>
        </Box>
    );
};
