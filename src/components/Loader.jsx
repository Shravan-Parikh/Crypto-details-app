import { Box, Spinner, VStack } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return <VStack justifyContent={"center"} h="90vh" >
    <Box transform={"scale(2.8)"}>
      <Spinner size={"xl"} />
    </Box>
  </VStack>
}

export default Loader