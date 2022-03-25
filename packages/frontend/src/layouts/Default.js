import React from 'react';
import {
  Badge,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
} from '@chakra-ui/react';
import {Logo} from '../components/Logo';
import Nav from '../components/Nav';
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

      <Center>
        <Text mt="4" maxW="md" textAlign="center">
          &copy; 2022 YOKE & Doug Kulak, maybe.
          <br />
          Thanks for being a valued customer!
        </Text>
      </Center>
    </>
  );
}

export default Default;
