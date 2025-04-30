import { JSX } from 'react';

import { useTranslation } from 'react-i18next';

import { Text } from '@chakra-ui/react';

export const Rights = (): JSX.Element => {
    const ns = ['footer'];
    const { t } = useTranslation(ns);
    const year = new Date().getFullYear();

    return (
        <Text py='3' color='wht'>
            {t('rights', { year })}
        </Text>
    );
};
