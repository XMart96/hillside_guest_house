import { ButtonItemProps } from '@/types';
import { Button } from '@chakra-ui/react';

export const SubmitButton = ({ children, type }: ButtonItemProps) => (
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
