import { NewsletterInputProps } from '@/types';
import { Input } from '@chakra-ui/react';

export const NewsletterInput = ({
    register,
    requiredText,
    errorText,
}: NewsletterInputProps) => (
    <Input
        mt='2'
        type='email'
        placeholder='email@example.com'
        _focusVisible={{
            borderColor: 'grn',
            outlineColor: 'grn',
        }}
        _invalid={{
            borderColor: 'errorRed',
            outlineColor: 'errorRed',
        }}
        borderColor='gry'
        _placeholder={{ color: 'gry' }}
        {...register('newsletterEmail', {
            required: requiredText,
            pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message: errorText,
            },
        })}
    />
);
