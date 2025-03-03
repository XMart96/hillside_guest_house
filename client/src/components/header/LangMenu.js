/*
*   FileName: LangMenu.js
*   Redactor: Visual Studio Code
*   TabSize: 4
*   Author: Khachatur Martirosyan
*   brief: The LangMenu component displays a language selection menu that allows users to change the app's language.
*   It uses Chakra UI components, React Icons, and react-i18next for language handling.
*/

import { 
    MenuContent,
    MenuRadioItem,
    MenuRadioItemGroup,
    MenuRoot,
    MenuTrigger
} from "@/components/ui/menu";
import { Button } from "@/components/ui/button";
import { LuLanguages } from "react-icons/lu";
import { Text, Icon } from "@chakra-ui/react";
import { useTranslation } from 'react-i18next';
import { lang } from "../../data";

const LangMenu = () => {
    const { i18n, t } = useTranslation(['header']);

    return (
        <MenuRoot>
            <MenuTrigger asChild>
                <Button 
                    variant='ghost' 
                    color='white' 
                    bg='blu'
                    _hover={{ color: 'grn' }} 
                    _focusVisible={{ outline: 'none' }}
                    m='0'
                    p='0'
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
                                color='white'
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