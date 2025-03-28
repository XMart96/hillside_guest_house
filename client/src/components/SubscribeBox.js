import { Field, Input, Heading, Flex } from "@chakra-ui/react";
import { LuMail } from "react-icons/lu";
import { useForm } from 'react-hook-form';
import { useTranslation } from "react-i18next";

import { Btn } from "@components/elements";
import logger from "@/logger";

const SubscribeBox = ({ textColor }) => {
    const ns = ['subscribe'];
    const { t, i18n } = useTranslation(ns);
    ns.forEach(n => !i18n.hasResourceBundle(i18n.language, n) && logger('assert', '104', n));

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: 'onChange' }); 
    const onSubmit = handleSubmit(d => {
        if (!d.newsletterEmail) {
            logger('error', '202');
            return;
        }
        if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(d.newsletterEmail)) {
            logger('error', '203');
            return;
        }
        console.log(d);
        reset();
    });

    return (
        <Flex direction='column' gap='2' maxW={{ base: "300px", lg: "100%" }}>
            <Heading color={textColor} size='xl'>{t('subscribe')}</Heading>
            <form onSubmit={onSubmit}>
                <Field.Root invalid={!!errors.newsletterEmail}>
                    <Field.Label color={textColor}>
                        {t('subscribeText')}
                    </Field.Label>
                    <Input 
                        mt='2'
                        type='email' 
                        name='newsletterEmail' 
                        placeholder="email@example.com"
                        _focusVisible={{ borderColor: 'grn', outlineColor: 'grn' }}
                        borderColor="gry"
                        _placeholder={{ color: 'gry' }}
                        {...register('newsletterEmail', { 
                            required: t('inputRequired'),
                            pattern: {
                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                message: t('inputError')
                            } 
                        })}
                    />
                    <Field.ErrorText>{errors.newsletterEmail?.message}</Field.ErrorText>
                </Field.Root>
                <Btn type="submit" mt='4'>
                    <LuMail /> {t('subscribeButton')}
                </Btn>
            </form>
        </Flex>
    );
};

export default SubscribeBox;