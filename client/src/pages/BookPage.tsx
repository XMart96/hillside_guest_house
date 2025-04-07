import {
    BookPageContainer,
    PageSectionContainer,
} from '@/components/layoutElements';
import { StepsSection } from '@book/StepsSection';
import { Flex } from '@chakra-ui/react';

export const BookPage = () => (
    <Flex direction='column' color='gry'>
        <BookPageContainer>
            <PageSectionContainer>
                <StepsSection />
            </PageSectionContainer>
        </BookPageContainer>
    </Flex>
);
