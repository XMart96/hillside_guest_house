import {
    NewsletterInputProps,
    DateInputProps,
    NumberInputProps,
} from '@/types';
import {
    Field,
    Input,
    InputGroup,
    Icon,
    NumberInput as ChakraNumberInput,
} from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller } from 'react-hook-form';
import { LuCalendarSearch, LuCircleX, LuUser } from 'react-icons/lu';
import { Tooltip } from '@chakra/tooltip';
import { addDays, format, subDays } from 'date-fns';
import { JSX } from 'react';

export const NewsletterInput = ({
    register,
    errors,
    name,
    labelText,
    requiredText,
    errorText,
}: NewsletterInputProps): JSX.Element => (
    <Field.Root invalid={!!errors.newsletterEmail}>
        <Field.Label>{labelText}</Field.Label>
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
            {...register(name, {
                required: requiredText,
                pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,6}$/,
                    message: errorText,
                },
            })}
        />
        <Field.ErrorText>{errors.newsletterEmail?.message}</Field.ErrorText>
    </Field.Root>
);

interface ICustomDateInputProps {
    value: string;
    onClick: () => void;
    onClear: () => void;
    placeholder: string;
    tooltipText: string;
}
const CustomDateInput = ({
    value,
    onClick,
    onClear,
    placeholder,
    tooltipText,
}: ICustomDateInputProps): JSX.Element => (
    <InputGroup
        startElement={<Icon as={LuCalendarSearch} color='grn'></Icon>}
        endElement={
            value && (
                <Tooltip showArrow content={tooltipText}>
                    <Icon
                        as={LuCircleX}
                        cursor='pointer'
                        color='gry'
                        onClick={() => onClear()}
                    ></Icon>
                </Tooltip>
            )
        }
    >
        <Input
            minW='160px'
            onClick={onClick}
            value={value}
            placeholder={placeholder}
            _focusVisible={{ borderColor: 'grn', outlineColor: 'grn' }}
            borderColor='gry'
            _placeholder={{ color: 'gry' }}
            _invalid={{
                borderColor: 'errorRed',
                outlineColor: 'errorRed',
            }}
            readOnly
        />
    </InputGroup>
);

export const DateInput = ({
    control,
    errors,
    name,
    formValues,
    labelText,
    requiredText,
    stayText,
    tooltipText,
}: DateInputProps): JSX.Element => (
    <Field.Root invalid={!!errors[name]} alignItems='stretch' required>
        <Field.Label>
            {labelText}
            <Field.RequiredIndicator />
        </Field.Label>
        <Controller
            control={control}
            name={name}
            rules={{ required: requiredText }}
            render={({ field }) => (
                <DatePicker
                    selected={field.value}
                    onChange={date => field.onChange(date)}
                    minDate={
                        name === 'checkIn'
                            ? new Date()
                            : formValues.checkIn
                            ? addDays(formValues.checkIn, 2)
                            : addDays(new Date(), 2)
                    }
                    maxDate={
                        name === 'checkIn' && formValues.checkOut
                            ? subDays(formValues.checkOut, 2)
                            : undefined
                    }
                    dateFormat='dd.MM.yyyy'
                    placeholderText='dd.MM.yyyy'
                    excludeDates={
                        name === 'checkOut' && formValues.checkIn
                            ? ([
                                  {
                                      date: formValues.checkIn,
                                      message: stayText,
                                  },
                                  {
                                      date: addDays(formValues.checkIn, 1),
                                      message: stayText,
                                  },
                              ].filter(d => d.date !== null) as {
                                  date: Date;
                                  message: string;
                              }[])
                            : undefined
                    }
                    customInput={
                        <CustomDateInput
                            value={
                                field.value
                                    ? format(field.value, 'dd.MM.yyyy')
                                    : ''
                            }
                            onClick={() => {}}
                            onClear={() => field.onChange(null)}
                            placeholder='dd.MM.yyyy'
                            tooltipText={tooltipText}
                        />
                    }
                />
            )}
        />
        <Field.ErrorText>{errors[name]?.message}</Field.ErrorText>
    </Field.Root>
);

export const NumberInput = ({
    control,
    errors,
    name,
    labelText,
    requiredText,
    errorMinText,
    errorMaxText,
}: NumberInputProps): JSX.Element => (
    <Field.Root invalid={!!errors[name]} w='85px' required>
        <Field.Label>
            {labelText}
            <Field.RequiredIndicator />
        </Field.Label>
        <Controller
            control={control}
            name={name}
            rules={{
                required: requiredText,
                min: {
                    value: 1,
                    message: errorMinText,
                },
                max: {
                    value: 8,
                    message: errorMaxText,
                },
            }}
            render={({ field }) => (
                <ChakraNumberInput.Root
                    {...field}
                    value={field.value}
                    onValueChange={({ value }) => field.onChange(value)}
                >
                    <ChakraNumberInput.Control
                        borderColor='gry'
                        _hover={{
                            bg: 'blu',
                            color: 'grn',
                            roundedRight: '3px',
                        }}
                    >
                        <ChakraNumberInput.IncrementTrigger
                            borderColor='gry'
                            _hover={{
                                bg: 'blu',
                                color: 'grn',
                                roundedTopRight: '3px',
                            }}
                        />
                        <ChakraNumberInput.DecrementTrigger
                            borderColor='gry'
                            _hover={{
                                bg: 'blu',
                                color: 'grn',
                                roundedBottomRight: '3px',
                            }}
                        />
                    </ChakraNumberInput.Control>

                    <InputGroup
                        startElement={<Icon as={LuUser} color='grn'></Icon>}
                    >
                        <ChakraNumberInput.Input
                            w='85px'
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
                        />
                    </InputGroup>
                </ChakraNumberInput.Root>
            )}
        />
        <Field.ErrorText>{errors[name]?.message}</Field.ErrorText>
    </Field.Root>
);
