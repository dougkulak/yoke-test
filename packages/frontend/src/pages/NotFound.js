import React from 'react';
import {Box, Center, Divider, Heading, Link, Text} from '@chakra-ui/react';

function NotFound() {
  return (
    <>
      <Center>
        <Box textAlign={'center'}>
          <Box p={6}>
            <Heading>404 Not Found</Heading>
            <Text>
              The page could not be found. Please check the URL and try again.
            </Text>
          </Box>
          <Divider />
          <Box p={6}>
            <Link color="teal.500" href="/" fontSize="2xl">
              Back to Home
            </Link>
          </Box>
        </Box>
      </Center>
    </>
  );
}

export default NotFound;
