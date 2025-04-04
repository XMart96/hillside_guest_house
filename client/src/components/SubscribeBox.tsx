import { Heading, Field } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { SubmitButton } from '@components/ButtonItems';
import { LuMail } from 'react-icons/lu';
import { NewsletterInput } from '@components/InputItems';
import { INewsletterFormValues } from '@/types';

export const SubscribeBox = () => {
    const ns = ['subscribe'];
    const { t } = useTranslation(ns);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<INewsletterFormValues>({ mode: 'onChange' });

    const onSubmit = handleSubmit(data => {
        if (!data.newsletterEmail) {
            return;
        }
        if (
            !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
                data.newsletterEmail
            )
        ) {
            return;
        }
        console.log(data);
        reset();
    });

    return (
        <>
            <Heading>{t('subscribe')}</Heading>
            <form onSubmit={onSubmit}>
                <Field.Root invalid={!!errors.newsletterEmail}>
                    <Field.Label>{t('subscribeText')}</Field.Label>
                    <NewsletterInput
                        register={register}
                        requiredText={t('inputRequired')}
                        errorText={t('inputError')}
                    />
                    <Field.ErrorText>
                        {errors.newsletterEmail?.message}
                    </Field.ErrorText>
                </Field.Root>
                <SubmitButton type='submit'>
                    <LuMail /> {t('subscribeButton')}
                </SubmitButton>
            </form>
        </>
    );
};
