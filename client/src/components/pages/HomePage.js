import { Flex, Box, Image, Fieldset, Input, Button } from '@chakra-ui/react';
import { NumberInputRoot, NumberInputField } from '@/components/ui/number-input';
import { Field } from '@/components/ui/field';
import image from '../../assets/room4/9-min.jpg';

const HomePage = () => (
    <Box>
        <Image w='100%' src={image} alt='Background' objectFit='cover' />
        <Flex bg='white' color='gry' rounded='2xl' p='5' maxW='400px'>
            <Fieldset.Root>
                <Fieldset.Content>
                    <Field label='Check In' required>
                        <Input 
                            type='date'
                            name='checkIn' 
                            _focusVisible={{borderColor: 'grn', outlineColor: 'grn'}}
                        />
                    </Field>
                    <Field label='Check Out' required>
                        <Input 
                            type='date'
                            name='checkOut' 
                            _focusVisible={{borderColor: 'grn', outlineColor: 'grn'}}
                        />
                    </Field>
                    <Field label='Adult' required>
                        <NumberInputRoot defaultValue='2' min='1' max='8'>
                            <NumberInputField _focusVisible={{borderColor: 'grn', outlineColor: 'grn'}}/>
                        </NumberInputRoot>
                    </Field>
                    <Field label='Children'>
                        <NumberInputRoot defaultValue='0' min='0' max='8'>
                            <NumberInputField _focusVisible={{borderColor: 'grn', outlineColor: 'grn'}}/>
                        </NumberInputRoot>
                    </Field>
                    <Button 
                        bg='grn' 
                        color='white' 
                        _hover={{ bg: 'blu', color: 'grn', shadow: 'md' }} 
                        transition='0.4s'
                    >
                        Check aviability
                    </Button>
                </Fieldset.Content>
            </Fieldset.Root>
        </Flex>
    </Box>
);

export default HomePage;