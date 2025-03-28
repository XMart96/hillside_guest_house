import { 
    MenuContent,
    MenuRadioItem,
    MenuRadioItemGroup,
    MenuRoot,
    MenuTrigger
} from "@components/ui/menu";
import { Button } from "@components/ui/button";
import { LuLanguages } from "react-icons/lu";
import { Text, Icon } from "@chakra-ui/react";
import { useTranslation } from 'react-i18next';

import logger from "@/logger";

const LangMenu = () => {
    const ns = ['lang'];
    const { i18n, t } = useTranslation(ns);
    ns.forEach(n => !i18n.hasResourceBundle(i18n.language, n) && logger('assert', '104', n));

    const lang = {
        en: 'English',
        ru: 'Русский',
        am: 'Հայերեն'
    };

    return (
        <MenuRoot>
            <MenuTrigger asChild>
                <Button 
                    variant='ghost' 
                    color='wht' 
                    bg='blu'
                    _hover={{ color: 'grn' }} 
                    _focusVisible={{ outline: 'none' }}
                    display="flex"
                    alignItems="center"
                    pr={{md: 0}}
                >
                    <Icon as={LuLanguages} fontSize='20px' />
                    <Text fontSize='md' hideBelow='md'>{t('lang')}</Text>
                </Button>
            </MenuTrigger>
            <MenuContent minW="10rem" bg='blu'>
                <MenuRadioItemGroup
                    value={i18n.language}
                    onValueChange={e => i18n.changeLanguage(e.value)}
                >
                    {
                        Object.entries(lang).map(([k, l]) => (
                            <MenuRadioItem 
                                key={k} 
                                value={k}
                                _hover={{color: 'grn'}}
                                color='wht'
                            >
                                {l}
                            </MenuRadioItem>
                        ))
                    }
                </MenuRadioItemGroup>
            </MenuContent>
        </MenuRoot>
    );
};

export default LangMenu;