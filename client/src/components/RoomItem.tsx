import { JSX, useState } from 'react';

import { LuArrowRight } from 'react-icons/lu';
import { useLocation } from 'react-router';

import { Card, FormatNumber, Image, Skeleton, Text } from '@chakra-ui/react';
import { ButtonLinkItem } from '@components/LinkItems';
import { PageSectionContainer } from '@components/layoutElements';

interface IRoomItemProps {
    path: string;
    imgPath: string;
    bgImage: string;
    price: string;
    header: string;
    subheader: string;
    btn: string;
}
export const RoomItem = ({
    path,
    imgPath,
    bgImage,
    price,
    header,
    subheader,
    btn,
}: IRoomItemProps): JSX.Element => {
    const [imgLoading, setImgLoading] = useState<boolean>(true);
    const location = useLocation();

    return (
        <PageSectionContainer w={{ base: '100%', sm: '80%', md: '49%' }}>
            <Card.Root overflow='hidden' bg='wht' color='gry' border='none'>
                <Skeleton
                    loading={imgLoading}
                    variant='shine'
                    css={{
                        '--start-color': 'colors.grn',
                        '--end-color': 'colors.wht',
                    }}
                >
                    <Image
                        src={`${imgPath}${bgImage}`}
                        alt={header}
                        onLoad={() => setImgLoading(false)}
                    />
                </Skeleton>
                <Card.Body gap='3'>
                    <Card.Title>{header}</Card.Title>
                    <Card.Description>{subheader}</Card.Description>
                    <Text
                        textStyle='2xl'
                        fontWeight='medium'
                        letterSpacing='tight'
                        mt='2'
                    >
                        <FormatNumber
                            value={+price}
                            style='currency'
                            currency='AMD'
                            maximumFractionDigits={0}
                            minimumFractionDigits={0}
                        />
                    </Text>
                </Card.Body>
                <Card.Footer>
                    <ButtonLinkItem
                        url={`${location.pathname}${path}`}
                        text={btn}
                        icon={LuArrowRight}
                    />
                </Card.Footer>
            </Card.Root>
        </PageSectionContainer>
    );
};
