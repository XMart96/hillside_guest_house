import { Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SubmitButton } from '@components/ButtonItems';
import { LuMail } from 'react-icons/lu';
import { NewsletterInput } from '@components/InputItems';
import { INewsletterFormValues } from '@/types';
import { JSX } from 'react';

export const SubscribeBox = (): JSX.Element => {
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
        <>
            <Heading>{t('subscribe')}</Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
                <NewsletterInput
                    register={register}
                    errors={errors}
                    name='newsletterEmail'
                    labelText={t('subscribeText')}
                    requiredText={t('inputRequired')}
                    errorText={t('inputError')}
                />
                <SubmitButton type='submit'>
                    <LuMail /> {t('subscribeButton')}
                </SubmitButton>
            </form>
        </>
    );
};
