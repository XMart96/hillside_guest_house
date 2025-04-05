import { JSX } from 'react';
import { Flex } from '@chakra-ui/react';
import { BreadcrumbSection } from '@/components/BreadcrumbSection';

export const AboutPage = (): JSX.Element => (
    <Flex direction='column'>
        <BreadcrumbSection bg='/assets/other/11-min.jpg' />
    </Flex>
);
