import React from 'react';
import {Box, Button, Container, Flex, Heading, HStack} from '@chakra-ui/react';
import {Logo} from '../components/Logo';
import Nav from './Nav';

function Default({children}) {
  return (
    <>
      <Flex
        as="header"
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

      <Container as="main" mt="20" maxW="2xl" bg="gray.50" centerContent>
        <Box padding="4" bg="gray.100" color="black" maxW="md">
          {children}
        </Box>
      </Container>
    </>
  );
}

export default Default;
