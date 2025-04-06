import { Button } from '@chakra-ui/react';
import { JSX, ReactNode } from 'react';

interface IButtonItemProps {
    children: ReactNode;
    type?: 'submit';
}
export const Btn = ({ children, type }: IButtonItemProps): JSX.Element => (
    <Button
        bg='grn'
        color='wht'
        _hover={{ bg: 'blu', color: 'grn', shadow: 'md' }}
        transition='0.2s'
        variant='ghost'
        type={type}
        mt='4'
    >
        {children}
    </Button>
);
