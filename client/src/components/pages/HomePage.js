import { Flex, Box, Image, Input } from '@chakra-ui/react';
import { NumberInputRoot, NumberInputField } from '@/components/ui/number-input';
import { Field } from '@/components/ui/field';
import image from '../../assets/room4/9-min.jpg';
import { useTranslation } from 'react-i18next';
import { Controller, useForm } from 'react-hook-form';
import { Btn } from '../elements';

const HomePage = () => {
    const { t } = useTranslation(['mainPageForm']);
    
    const { register, handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = handleSubmit(data => console.log(data));

    return (
        <Box position="relative">
            <Image w="100%" h="85.4vh" src={image} alt="Background" objectFit="cover" />
            <Flex
                position="absolute"
                bottom="10"
                left="50%"
                transform="translateX(-50%)"
                bg="white"
                color="gry"
                rounded="2xl"
                p="6"
                justify="center"
                w={{ base: '95%', sm: '70%', md: 'auto' }}
                shadow="md"
            >
                <form onSubmit={onSubmit} style={{ width: '100%' }}>
                    <Flex gap={{ base: '5', md: '8' }} align={{ base: 'center', md: 'end' }} direction={{ base: 'column', md: 'row' }}>
                        <Field
                            label={t('checkIn')}
                            w={{ base: '100%', md: '150px' }}
                            invalid={!!errors.checkIn}
                            errorText={errors.checkIn?.message}
                        >
                            <Input
                                type="date"
                                name="checkIn"
                                _focusVisible={{ borderColor: 'grn', outlineColor: 'grn' }}
                                borderColor="gry"
                                _placeholder={{ color: 'gry' }}
                                {...register('checkIn', { required: t('errorCheckIn') })}
                            />
                        </Field>
                        <Field
                            label={t('checkOut')}
                            w={{ base: '100%', md: '150px' }}
                            invalid={!!errors.checkOut}
                            errorText={errors.checkOut?.message}
                        >
                            <Input
                                type="date"
                                name="checkOut"
                                _focusVisible={{ borderColor: 'grn', outlineColor: 'grn' }}
                                borderColor="gry"
                                _placeholder={{ color: 'gry' }}
                                {...register('checkOut', { required: t('errorCheckOut') })}
                            />
                        </Field>
                        <Flex gap="5" w='100%'>
                            <Field
                                label={t('adult')}
                                w={{base: '100%', md: "80px"}}
                                invalid={!!errors.adult}
                                errorText={errors.adult?.message}
                            >
                                <Controller
                                    name="adult"
                                    control={control}
                                    rules={{ required: t('errorAdult'), min: 1, max: 8 }}
                                    defaultValue={2}
                                    render={({ field }) => (
                                        <NumberInputRoot {...field} min={1} max={8} value={field.value} onValueChange={({value}) => field.onChange(value)}>
                                            <NumberInputField
                                                _focusVisible={{ borderColor: 'grn', outlineColor: 'grn' }}
                                                borderColor="gry"
                                                _placeholder={{ color: 'gry' }}
                                            />
                                        </NumberInputRoot>
                                    )}
                                />
                            </Field>
                            <Field label={t('children')} w={{base: '100%', md: "80px"}}>
                                <Controller
                                    name="children"
                                    control={control}
                                    defaultValue={0}
                                    rules={{ min: 0, max: 8 }}
                                    render={({ field }) => (
                                        <NumberInputRoot {...field} min={0} max={8} value={field.value} onValueChange={({value}) => field.onChange(value)}>
                                            <NumberInputField
                                                _focusVisible={{ borderColor: 'grn', outlineColor: 'grn' }}
                                                borderColor="gry"
                                                _placeholder={{ color: 'gry' }}
                                            />
                                        </NumberInputRoot>
                                    )}
                                />
                            </Field>
                        </Flex>
                        <Btn type="submit">
                            {t('button')}
                        </Btn>
                    </Flex>
                </form>
            </Flex>
        </Box>
    );
};

export default HomePage;