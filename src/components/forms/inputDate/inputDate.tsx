import { Box, Input, Text } from '@chakra-ui/react'

type Props = {
  label?: string
}

export default function InputDate({label}: Props) {
  return (
    <Box>
      {label && (
        <Text color="gray.500">
          {label}
        </Text>
      )}
      <Input
        focusBorderColor="green.400"
        type="date"
        mt={2}
      />
    </Box>
  )
}