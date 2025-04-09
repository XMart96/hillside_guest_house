import { JSX } from 'react';
import { IconType } from 'react-icons';

import { Heading, Icon, Text } from '@chakra-ui/react';
import { ContactsSectionContainer } from '@components/layoutElements';

import { ContactsLinkItem } from './LinkItems';

interface IContactsItemProps {
    icon: IconType;
    header: string;
    label: string;
    type: string;
    link?: boolean;
}
export const ContactsItem = ({
    icon,
    header,
    label,
    type,
    link,
}: IContactsItemProps): JSX.Element => (
    <ContactsSectionContainer>
        <Icon as={icon} color='grn' fontSize='40px' />
        <Heading size='lg'>{header}</Heading>
        {link ? (
            <ContactsLinkItem
                url={type === 'phone' ? `tel:${label}` : `mailto:${label}`}
                text={label}
            />
        ) : (
            <Text textAlign='center'>{label}</Text>
        )}
    </ContactsSectionContainer>
);
