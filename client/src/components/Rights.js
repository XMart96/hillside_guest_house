import { Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import logger from "@/logger";

const Rights = () => {
    const ns = ['footer'];
    const { t, i18n } = useTranslation(ns);
    ns.forEach(n => !i18n.hasResourceBundle(i18n.language, n) && logger('assert', '104', n));

    return <Text color='wht'>{t('rights')}</Text>;
}

export default Rights;