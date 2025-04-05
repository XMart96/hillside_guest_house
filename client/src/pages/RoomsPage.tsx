import { JSX } from 'react';
import { Flex } from '@chakra-ui/react';
import { BreadcrumbSection } from '@/components/BreadcrumbSection';

export const RoomsPage = (): JSX.Element => (
    <Flex direction='column'>
        <BreadcrumbSection bg='/assets/room4/9-min.jpg' />
    </Flex>
);
