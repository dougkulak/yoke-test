import React from 'react';
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
} from '@chakra-ui/react';
import {Logo} from '../components/Logo';
import Nav from './Nav';
import {NavLink} from 'react-router-dom';
import {SettingsIcon} from '@chakra-ui/icons';

function Default({children}) {
  return (
    <>
      <Flex
        as="header"
        position="fixed"
        backgroundColor="white"
        w="100%"
        p="5"
        align="center"
        justify="space-between">
        <HStack>
          <Logo />
          <Heading>Grocery</Heading>
          <Badge variant="solid" colorScheme="green">
            PRO
          </Badge>
        </HStack>

        <Nav />

        <HStack>
          <Button as={NavLink} to="/profile">
            <SettingsIcon mr={2} /> Profile
          </Button>
        </HStack>
      </Flex>

      <Container
        as="main"
        pt="20"
        maxW="container.lg"
        bg="gray.50"
        centerContent>
        <Box padding="4" bg="gray.100" color="black" minW="lg">
          {children}
        </Box>
      </Container>
    </>
  );
}

export default Default;
