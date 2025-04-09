import { JSX } from 'react';

import { useTranslation } from 'react-i18next';
import { LuLanguages } from 'react-icons/lu';

import { Button, Icon, Menu, Portal, Text } from '@chakra-ui/react';

type langType = {
    [key: string]: string;
};
const lang: langType = {
    en: 'English',
    ru: 'Русский',
    am: 'Հայերեն',
};

export const LanguageSelector = (): JSX.Element => {
    const ns = ['lang'];
    const { i18n, t } = useTranslation(ns);
    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button
                    color='wht'
                    bg='blu'
                    _hover={{ color: 'grn' }}
                    _focusVisible={{ outline: 'none' }}
                    pr={{ md: 0 }}
                    transition='0.2s'
                >
                    <Icon as={LuLanguages} fontSize='20px' />
                    <Text hideBelow='md'>{t('lang')}</Text>
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content bg='blu'>
                        <Menu.RadioItemGroup
                            value={i18n.language}
                            onValueChange={e => i18n.changeLanguage(e.value)}
                        >
                            {Object.entries(lang).map(([key, value]) => (
                                <Menu.RadioItem
                                    key={key}
                                    value={key}
                                    _hover={{ color: 'grn' }}
                                    color='wht'
                                >
                                    {value}
                                    <Menu.ItemIndicator />
                                </Menu.RadioItem>
                            ))}
                        </Menu.RadioItemGroup>
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    );
};
