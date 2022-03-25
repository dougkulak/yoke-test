import React from 'react';
import {
  Box,
  Button,
  Center,
  Grid,
  Heading,
  HStack,
  Link,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from '@chakra-ui/react';
import PageHeading from '../components/PageHeading';
import {NavLink} from 'react-router-dom';
import {ArrowForwardIcon} from '@chakra-ui/icons';

function Home() {
  return (
    <>
      <PageHeading
        title={'Groceries, Simplified.'}
        subtitle={'Shopping online has never been so easy!'}
      />

      <HStack textAlign={'center'}>
        <Stat>
          <StatNumber>1</StatNumber>
          <StatLabel>Shop</StatLabel>
        </Stat>
        <Stat>
          <StatNumber>2</StatNumber>
          <StatLabel>Save</StatLabel>
        </Stat>
        <Stat>
          <StatNumber>3</StatNumber>
          <StatLabel>Repeat</StatLabel>
        </Stat>
      </HStack>

      <Box boxShadow="xs" p="6" mt="6" rounded="md" bg="white">
        <Text maxW="md">
          Unfasten your seatbelts because these groceries are being{' '}
          <em>delivered.</em> And, well, you won't even need a car.
        </Text>

        <Center>
          <Button
            mt={8}
            as={NavLink}
            to="/products"
            leftIcon={<ArrowForwardIcon />}
            colorScheme="purple"
            variant="solid">
            View Our Products
          </Button>
        </Center>
      </Box>
    </>
  );
}

export default Home;
