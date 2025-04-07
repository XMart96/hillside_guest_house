import { JSX, useState } from 'react';
import { PageSectionContainer } from '@/components/layoutElements';
import { ButtonLinkItem } from '@components/LinkItems';
import { Card, Image, Flex, HStack, Skeleton } from '@chakra-ui/react';
import { LuArrowRight, LuCalendarClock } from 'react-icons/lu';
import { useLocation } from 'react-router';

interface INewsItemProps {
    date: string;
    path: string;
    imgPath: string;
    bgImage: string;
    header: string;
    subheader: string;
    btn: string;
}
export const NewsItem = ({
    date,
    path,
    imgPath,
    bgImage,
    header,
    subheader,
    btn,
}: INewsItemProps): JSX.Element => {
    const [imgLoading, setImgLoading] = useState<boolean>(true);
    const location = useLocation();

    return (
        <PageSectionContainer>
            <Card.Root
                flexDirection={{ base: 'column', sm: 'row' }}
                alignItems={{ base: 'center', sm: 'stretch' }}
                overflow='hidden'
                bg='wht'
                color='gry'
                border='none'
            >
                <Skeleton
                    loading={imgLoading}
                    variant='shine'
                    css={{
                        '--start-color': 'colors.grn',
                        '--end-color': 'colors.wht',
                    }}
                >
                    <Image
                        objectFit='cover'
                        maxW={{ base: '', sm: '250px' }}
                        src={`${imgPath}${bgImage}`}
                        alt={header}
                        onLoad={() => setImgLoading(false)}
                    />
                </Skeleton>
                <Flex w='100%' direction='column'>
                    <Card.Body gap='3'>
                        <Card.Title>{header}</Card.Title>
                        <Card.Description color='gry'>
                            {subheader}
                        </Card.Description>
                        <HStack>
                            <LuCalendarClock />
                            {date}
                        </HStack>
                    </Card.Body>
                    <Card.Footer
                        justifyContent={{ base: 'flex-start', md: 'flex-end' }}
                    >
                        <ButtonLinkItem
                            url={`${location.pathname}${path}`}
                            text={btn}
                            icon={LuArrowRight}
                        />
                    </Card.Footer>
                </Flex>
            </Card.Root>
        </PageSectionContainer>
    );
};
