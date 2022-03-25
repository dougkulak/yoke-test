import React from 'react';
import PageHeading from '../components/PageHeading';
import {Box, Button, Center, Heading, Text} from '@chakra-ui/react';
import {NavLink} from 'react-router-dom';
import {ArrowForwardIcon, StarIcon} from '@chakra-ui/icons';

function Products() {
  return (
    <>
      <PageHeading
        title={'Products'}
        subtitle={'Check out our huge selection!'}
      />

      <Box boxShadow="xs" p="6" mt="6" rounded="md" bg="white">
        <Heading size="sm">
          <StarIcon /> Did You Know?
        </Heading>
        <Text maxW="md">
          You can view your order history on your profile page.
        </Text>

        <Center>
          <Button
            mt={8}
            as={NavLink}
            to="/profile"
            leftIcon={<ArrowForwardIcon />}
            colorScheme="purple"
            variant="outline">
            View Your Profile
          </Button>
        </Center>
      </Box>
    </>
  );
}

export default Products;
