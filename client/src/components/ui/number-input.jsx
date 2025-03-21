import { NumberInput as ChakraNumberInput } from '@chakra-ui/react'
import { forwardRef } from 'react'

export const NumberInputRoot = forwardRef(function NumberInput(props, ref) {
  const { children, ...rest } = props
  return (
    <ChakraNumberInput.Root ref={ref} variant='outline' {...rest}>
      {children}
      <ChakraNumberInput.Control borderColor="gry">
        <ChakraNumberInput.IncrementTrigger borderColor="gry" _hover={{bg: 'blu', color: 'grn'}} />
        <ChakraNumberInput.DecrementTrigger borderColor="gry" _hover={{bg: 'blu', color: 'grn'}} />
      </ChakraNumberInput.Control>
    </ChakraNumberInput.Root>
  )
})

export const NumberInputField = ChakraNumberInput.Input
export const NumberInputScruber = ChakraNumberInput.Scrubber
export const NumberInputLabel = ChakraNumberInput.Label
