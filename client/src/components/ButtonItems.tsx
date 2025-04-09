import { JSX, ReactNode } from 'react';

import { Button } from '@chakra-ui/react';

interface IButtonItemProps {
    children: ReactNode;
    type?: 'submit';
}
export const Btn = ({
    children,
    type,
    ...props
}: IButtonItemProps): JSX.Element => (
    <Button
        bg='grn'
        color='wht'
        _hover={{ bg: 'blu', color: 'grn', shadow: 'md' }}
        transition='0.2s'
        variant='ghost'
        type={type}
        {...props}
    >
        {children}
    </Button>
);

interface IBtnOutlineProps {
    children: ReactNode;
    color: string;
    hideFrom?: string;
}
export const BtnOutline = ({
    children,
    color,
    hideFrom,
    ...props
}: IBtnOutlineProps): JSX.Element => (
    <Button
        bg='transparent'
        _hover={{ color: 'grn' }}
        transition='0.2s'
        variant='ghost'
        color={color}
        hideFrom={hideFrom}
        {...props}
    >
        {children}
    </Button>
);
