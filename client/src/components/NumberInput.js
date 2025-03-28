import { Field, Icon } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { InputGroup } from '@components/ui/input-group';
import { LuUser } from 'react-icons/lu';
import { Controller } from 'react-hook-form';
import { NumberInputRoot, NumberInputField } from '@components/ui/number-input';

import logger from '@/logger';

const NumberInput = ({ inputName, control, errors}) => {
    const ns = ['initialForm'];
    const { t, i18n } = useTranslation(ns);
    ns.forEach(n => !i18n.hasResourceBundle(i18n.language, n) && logger('assert', '104', n));

    !i18n.exists(`initialForm:${inputName}`) && logger('assert', '104' `${inputName}`);
    !control && logger('assert', '106');
    
    return(
        <Field.Root invalid={!!errors[inputName]} w='80px'>
            <Field.Label>{t(inputName)}</Field.Label>
            <Controller
                control={control}
                name={inputName}
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
                        <InputGroup startElement={<Icon as={LuUser} color='grn'></Icon>}>
                            <NumberInputField
                                _focusVisible={{ borderColor: 'grn', outlineColor: 'grn' }}
                                borderColor="gry"
                                _placeholder={{ color: 'gry' }}
                            />
                        </InputGroup>
                    </NumberInputRoot>
                )}
            />
            <Field.ErrorText>{errors[inputName]?.message}</Field.ErrorText>
        </Field.Root>
    );
}

export default NumberInput;