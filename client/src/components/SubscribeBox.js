/*
*   FileName: SubscribeBox.js
*   Redactor: Visual Studio Code
*   TabSize: 4
*   Author: Khachatur Martirosyan
*   brief: The SubscribeBox component provides a subscription form where users can enter their email 
*   to receive updates. It uses Chakra UI for styling, react-hook-form for form handling, 
*   and react-i18next for translations.
*/

import { Field, Input, Heading, Flex } from "@chakra-ui/react";
import { Btn } from "@components/elements";
import { LuMail } from "react-icons/lu";
import { useForm } from 'react-hook-form';
import { useTranslation } from "react-i18next";

const SubscribeBox = ({ textColor }) => {
    const { t } = useTranslation(['footer']);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: 'onChange' }); 
    
    const onSubmit = handleSubmit(data => {
        console.log(data);
        reset();
    });

    return (
        <Flex direction='column' gap='2' maxW={{ base: "300px", lg: "100%" }}>
            <Heading color={textColor} size='xl'>{t('footer:subscribe')}</Heading>
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