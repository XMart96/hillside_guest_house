import { ContactsItemContainer } from '@components/layoutElements';
import { Icon, Heading, Text } from '@chakra-ui/react';
import { ContactsLinkItem } from './LinkItems';
import { IconType } from 'react-icons';
import { JSX } from 'react';

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
    <ContactsItemContainer>
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
    </ContactsItemContainer>
);
