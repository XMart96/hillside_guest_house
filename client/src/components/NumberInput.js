import { Field, Icon } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { InputGroup } from '@components/ui/input-group';
import { LuUser } from 'react-icons/lu';
import { Controller } from 'react-hook-form';
import { NumberInputRoot, NumberInputField } from '@components/ui/number-input';

const NumberInput = ({ inputName, control, errors}) => {
    const { t } = useTranslation(['initialForm']);
    
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