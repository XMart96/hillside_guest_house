/*
*   FileName: Rights.js
*   Redactor: Visual Studio Code
*   TabSize: 4
*   Author: Khachatur Martirosyan
*   brief: The Rights component displays copyright or legal information in the footer. 
*   It uses Chakra UI for styling and react-i18next for translations.
*/

import { Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Rights = () => {
    const { t } = useTranslation(['footer']);

    return (
        <Text color='white'>{t('rights')}</Text>
    );
}

export default Rights;