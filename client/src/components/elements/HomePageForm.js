import { NumberInputRoot, NumberInputField } from '@/components/ui/number-input';
import { Field, Flex, Input } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Controller, useForm } from 'react-hook-form';
import Btn from './Btn';

const HomePageForm = () => {
    const { t } = useTranslation(['mainPageForm']);
    const { register, handleSubmit, formState: { errors }, reset, control } = useForm({ 
        mode: 'onChange', 
        defaultValues: {
            adult: 2
        }
    }); 
    
    const onSubmit = handleSubmit(data => {
        console.log(data);
        reset();
    });
    
    return (
        <form onSubmit={onSubmit} style={{ width: '100%' }}>
            <Flex 
                gap={{ base: '5', md: '8' }} 
                align={{ base: 'center', md: 'end' }} 
                direction={{ base: 'column', md: 'row' }}
            >
                <Field.Root invalid={!!errors.checkIn}>
                    <Field.Label>
                        {t('checkIn')}
                    </Field.Label>
                    <Input 
                        type='date'
                        name='checkIn'
                        _focusVisible={{ borderColor: 'grn', outlineColor: 'grn' }}
                        borderColor="gry"
                        _placeholder={{ color: 'gry' }}
                        min={new Date().toISOString().split('T')[0]}
                        {...register('checkIn', { 
                            required: t('requiredCheckIn'),
                            pattern: {
                                value: /^\d{4}-\d{2}-\d{2}$/,
                                message: t('errorCheckIn')
                            } 
                        })}
                    />
                    <Field.ErrorText>{errors.checkIn?.message}</Field.ErrorText>
                </Field.Root>

                <Field.Root invalid={!!errors.checkOut}>
                    <Field.Label>
                        {t('checkOut')}
                    </Field.Label>
                    <Input
                        type='date' 
                        name='checkOut'
                        _focusVisible={{ borderColor: 'grn', outlineColor: 'grn' }}
                        borderColor="gry"
                        _placeholder={{ color: 'gry' }}
                        {...register('checkOut', { 
                            required: t('requiredCheckOut'),
                            pattern: {
                                value: /^\d{4}-\d{2}-\d{2}$/,
                                message: t('errorCheckOut')
                            } 
                        })}
                    />
                    <Field.ErrorText>{errors.checkOut?.message}</Field.ErrorText>
                </Field.Root>

                <Field.Root invalid={!!errors.adult}>
                    <Field.Label>
                        {t('adult')}
                    </Field.Label>
                    <Controller
                        control={control}
                        name="adult"
                        rules={{
                            required: t('requiredAdult'),
                            min: {
                                value: 1,
                                message: t('errorMinAdult')
                            },
                            max: {
                                value: 8,
                                message: t('errorMaxAdult')
                            },
                        }}
                        render={({ field }) => (
                            <NumberInputRoot
                                minW={{ md: '80px'}}
                                {...field} 
                                value={field.value}
                                onValueChange={({value}) => field.onChange(value)}
                            >
                                <NumberInputField
                                    _focusVisible={{ borderColor: 'grn', outlineColor: 'grn' }}
                                    borderColor="gry"
                                    _placeholder={{ color: 'gry' }}
                                />
                            </NumberInputRoot>
                        )}
                    />
                    <Field.ErrorText>{errors.adult?.message}</Field.ErrorText>
                </Field.Root>

                <Btn type="submit">
                    {t('button')}
                </Btn>
            </Flex>
        </form>
    );
}

export default HomePageForm;