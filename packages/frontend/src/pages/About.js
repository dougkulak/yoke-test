import React from 'react';
import PageHeading from '../components/PageHeading';
import {Box, Button, Center, Text} from '@chakra-ui/react';
import {NavLink} from 'react-router-dom';
import {ArrowForwardIcon} from '@chakra-ui/icons';

function About() {
  return (
    <>
      <PageHeading
        title={'About Us'}
        subtitle={"We're a popular grocery store, in a way."}
      />

      <Box boxShadow="xs" p="6" mt="6" rounded="md" bg="white">
        <Text maxW="md">
          You know what really makes us great? It's our low prices. Definitely.
          But enough about that, let's talk products. You want some? We got 'em!
          Just click the link below to find out.
        </Text>

        <Center>
          <Button
            mt={8}
            as={NavLink}
            to="/products"
            leftIcon={<ArrowForwardIcon />}
            colorScheme="purple"
            variant="solid">
            Start Shopping Now!
          </Button>
        </Center>
      </Box>
    </>
  );
}

export default About;
