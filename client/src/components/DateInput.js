import { Field, Icon, Input } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { forwardRef } from 'react';
import { addDays, subDays } from "date-fns";
import { InputGroup } from '@components/ui/input-group';
import { Tooltip } from '@components/ui/tooltip';
import { LuCalendarSearch, LuCircleX } from 'react-icons/lu';
import { Controller } from 'react-hook-form';

import logger from '@/logger';

const DateInput = ({ inputName, control, errors, checkInValue, checkOutValue }) => {
    const ns = ['initialForm'];
    const { t, i18n } = useTranslation(ns);
    ns.forEach(n => !i18n.hasResourceBundle(i18n.language, n) && logger('assert', '104', n));

    !i18n.exists(`initialForm:${inputName}`) && logger('assert', '104' `${inputName}`);
    !control && logger('assert', '106');

    const CustomInput = forwardRef(({ value, onClick, placeholder, onClear, name }, ref) => (
        <InputGroup 
            startElement={<Icon as={LuCalendarSearch} color='grn'></Icon>}
            endElement={value && 
                <Tooltip showArrow content={t('closeTooltip')}>
                    <Icon as={LuCircleX} cursor='pointer' color='gry' onClick={() => onClear(name)}></Icon>
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

    return(
        <Field.Root invalid={!!errors[inputName]}>
            <Field.Label>{t(inputName)}</Field.Label>
            <Controller
                control={control}
                name={inputName}
                rules={{ required: inputName === 'checkIn' ? 
                    t('requiredCheckIn') : 
                    t('requiredCheckOut') 
                }}
                render={({ field }) => (
                    <DatePicker
                        selected={field.value}
                        onChange={date => field.onChange(date)}
                        minDate={ inputName === 'checkIn' ? 
                            new Date() : 
                            checkInValue ?
                            addDays(checkInValue, 2) :
                            addDays(new Date(), 2)
                        } 
                        maxDate={
                            inputName === 'checkIn' ? 
                            checkOutValue &&
                            subDays(checkOutValue, 2) : ''
                        }
                        dateFormat="dd-MM-yyyy"
                        placeholderText="dd-mm-yyyy"
                        excludeDates={ inputName === 'checkOut' ?
                            [
                                { date: checkInValue, message: t('minStay') },
                                { date: addDays(checkInValue, 1), message: t('minStay') },
                            ] : []
                        }
                        customInput={
                            <CustomInput 
                                onClear={() => field.onChange(null)} 
                                name={field.name} 
                            />
                        }
                    />
                )}
            />
            <Field.ErrorText>{errors[inputName]?.message}</Field.ErrorText>
        </Field.Root>
    );

}

export default DateInput;