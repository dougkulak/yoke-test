import React from 'react';
import {Box, Button, Container, Flex, Heading, HStack} from '@chakra-ui/react';
import {Logo} from '../components/Logo';
import Nav from './Nav';

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
        </HStack>

        <Nav />

        <HStack>
          <Button>Profile</Button>
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
