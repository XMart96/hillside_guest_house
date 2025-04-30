import { ReactNode } from 'react';

import { Skeleton } from '@chakra-ui/react';

interface ICustomSkeleton {
    children: ReactNode;
    loading: boolean;
}
export const CustomSkeleton = ({ children, loading }: ICustomSkeleton) => {
    return (
        <Skeleton
            loading={loading}
            variant='shine'
            css={{
                '--start-color': 'colors.grn',
                '--end-color': 'colors.wht',
            }}
        >
            {children}
        </Skeleton>
    );
};
