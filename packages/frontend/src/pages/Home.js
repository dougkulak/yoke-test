import React from 'react';
import {Box, Grid, Heading, Link, Text, VStack} from '@chakra-ui/react';

function Home() {
  return (
    <>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8} pt={10}>
            <Heading>Welcome, username!</Heading>
            <Text>Welcome to the YOKE grocery store!</Text>
            <Link color="teal.500" href="/products" fontSize="2xl">
              View Products
            </Link>
          </VStack>
        </Grid>
      </Box>
    </>
  );
}

export default Home;
