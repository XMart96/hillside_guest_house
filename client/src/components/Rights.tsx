import { Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const Rights = () => {
    const ns = ['footer'];
    const { t } = useTranslation(ns);
    const year = new Date().getFullYear();

    return <Text color='wht'>{t('rights', { year })}</Text>;
};
