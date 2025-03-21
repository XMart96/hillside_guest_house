import { Flex, Field, Box, Input, Icon } from "@chakra-ui/react";
import { Tooltip } from '@components/ui/tooltip';
import { NumberInputRoot, NumberInputField } from '@components/ui/number-input';
import { InputGroup } from '@components/ui/input-group';
import { useTranslation } from "react-i18next";
import { Controller, useForm } from 'react-hook-form';
import { Btn } from '@components/elements';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { forwardRef } from "react";
import { LuCalendarSearch, LuCircleX, LuUser } from 'react-icons/lu';
import { addDays, format, subDays } from "date-fns";

const BookCalendarForm = () => {
    const { t } = useTranslation(['initialForm']);
    const { handleSubmit, formState: { errors }, reset, control, watch } = useForm({ 
        mode: 'onChange', 
        defaultValues: {
            adult: 2,
            checkIn: null,
            checkOut: null
        }
    });
    const checkInValue = watch("checkIn");
    const checkOutValue = watch("checkOut");

    const onSubmit = handleSubmit(data => {
        const formattedData = {
            ...data,
            checkIn: format(new Date(data.checkIn), 'dd-MM-yyyy'),
            checkOut: format(new Date(data.checkOut), 'dd-MM-yyyy')
        }

        console.log(formattedData);
        reset();
    });

    const CustomInput = forwardRef(({ value, onClick, placeholder, onClear, name }, ref) => (
        <InputGroup 
            startElement={<Icon color='grn'><LuCalendarSearch /></Icon>}
            endElement={value && 
                <Tooltip showArrow content={t('closeTooltip')}>
                    <Icon cursor='pointer' color='gry' onClick={() => onClear(name)}>
                        <LuCircleX />
                    </Icon>
                </Tooltip>
            }
        >
            <Input
                ref={ref}
                onClick={onClick}
                value={value}
                placeholder={placeholder}
                _focusVisible={{ borderColor: 'grn', outlineColor: 'grn' }}
                borderColor="gry"
                _placeholder={{ color: 'gry' }}
                readOnly
            />
        </InputGroup>
    ));

    return (
        <Box flex='1'>
            <form onSubmit={onSubmit}>
                <Flex direction='column' gap={{ base: '5', md: '8' }}>
                    <Field.Root invalid={!!errors.checkIn}>
                        <Field.Label>{t('checkIn')}</Field.Label>
                        <Controller
                            control={control}
                            name="checkIn"
                            rules={{ required: t('requiredCheckIn') }}
                            render={({ field }) => (
                                <DatePicker
                                    selected={field.value}
                                    onChange={date => field.onChange(date)}
                                    minDate={new Date()} 
                                    maxDate={
                                        checkOutValue &&
                                        subDays(checkOutValue, 2)
                                    }
                                    dateFormat="dd-MM-yyyy"
                                    placeholderText="dd-mm-yyyy"
                                    customInput={
                                        <CustomInput 
                                            onClear={() => field.onChange(null)} 
                                            name={field.name} 
                                        />
                                    }
                                />
                            )}
                        />
                        <Field.ErrorText>{errors.checkIn?.message}</Field.ErrorText>
                    </Field.Root>
                    <Field.Root invalid={!!errors.checkOut}>
                        <Field.Label>{t('checkOut')}</Field.Label>
                        <Controller
                            control={control}
                            name="checkOut"
                            rules={{ required: t('requiredCheckOut') }}
                            render={({ field }) => (
                                <DatePicker
                                    selected={field.value}
                                    onChange={date => field.onChange(date)}
                                    minDate={
                                        checkInValue ?
                                        addDays(checkInValue, 2) :
                                        addDays(new Date(), 2)
                                    } 
                                    dateFormat="dd-MM-yyyy"
                                    placeholderText="dd-mm-yyyy"
                                    customInput={
                                        <CustomInput 
                                            onClear={() => field.onChange(null)} 
                                            name={field.name} 
                                        />
                                    }
                                    excludeDates={[
                                        { date: checkInValue, message: t('minStay') },
                                        { date: addDays(checkInValue, 1), message: t('minStay') },
                                    ]}
                                />
                            )}
                        />
                        <Field.ErrorText>{errors.checkOut?.message}</Field.ErrorText>
                    </Field.Root>
                    <Field.Root invalid={!!errors.adult} w='80px'>
                        <Field.Label>{t('adult')}</Field.Label>
                        <Controller
                            control={control}
                            name="adult"
                            rules={{
                                required: t('requiredAdult'),
                                min: { value: 1, message: t('errorMinAdult') },
                                max: { value: 8, message: t('errorMaxAdult') }
                            }}
                            render={({ field }) => (
                                <NumberInputRoot
                                    w='85px'
                                    {...field} 
                                    value={field.value}
                                    onValueChange={({ value }) => field.onChange(value)}
                                >
                                    <InputGroup startElement={<Icon color='grn'><LuUser /></Icon>}>
                                        <NumberInputField
                                            _focusVisible={{ borderColor: 'grn', outlineColor: 'grn' }}
                                            borderColor="gry"
                                            _placeholder={{ color: 'gry' }}
                                        />
                                    </InputGroup>
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
        </Box>
    );
};

export default BookCalendarForm;