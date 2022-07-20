import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

export const Header = () => {
  return (
    <Box as="section" position="fixed" width="100%" top="0" zIndex={999}>
      <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
        <Container>
          <Flex justify="space-between" py={{ base: '3', lg: '4' }}>
            <HStack spacing="4">
              <Heading size={["xs", "sm"]} fontSize={["xs", "2xl"]}> World Countries </Heading>
            </HStack>
            <HStack spacing="4">
              <ColorModeSwitcher />
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}
