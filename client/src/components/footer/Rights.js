import { Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Rights = () => {
    const { t } = useTranslation(['footer']);

    return (
        <Text color='white'>{t('rights')}</Text>
    );
}

export default Rights