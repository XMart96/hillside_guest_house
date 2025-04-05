import { JSX } from 'react';
import { Flex } from '@chakra-ui/react';
import { BreadcrumbSection } from '@/components/BreadcrumbSection';

export const ContactsPage = (): JSX.Element => (
    <Flex direction='column'>
        <BreadcrumbSection bg='/assets/room3/10-min.jpg' />
    </Flex>
);
