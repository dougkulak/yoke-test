import React from 'react';
import PageHeading from '../components/PageHeading';
import {Badge, Box, Button, Center, Heading, Text} from '@chakra-ui/react';
import {NavLink} from 'react-router-dom';
import {ArrowForwardIcon, StarIcon} from '@chakra-ui/icons';
import {useQuery} from 'react-query';
import {fetchProducts} from '../services/products';
import Loader from '../components/Loader';

function Product({data}) {
  return (
    <NavLink to={`/products/${data.id}`}>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        mb="4"
        overflow="hidden"
        _hover={{backgroundColor: 'gray.50'}}>
        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2">
              {data.data.quantityInStock} remaining &bull; buy now!
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated>
            {data.data.name}
          </Box>

          <Box>
            ${data.data.price}{' '}
            <Box as="span" color="gray.600" fontSize="sm">
              / each
            </Box>
          </Box>
        </Box>
      </Box>
    </NavLink>
  );
}

function Products() {
  const {isLoading, data} = useQuery(
    'products',
    async () => {
      try {
        const data = await fetchProducts();
        return {data};
      } catch (err) {
        console.error(err);
      }
    },
    {keepPreviousData: true}
  );

  return (
    <>
      <PageHeading
        title={'Products'}
        subtitle={'Check out our huge selection!'}
      />

      {isLoading && <Loader />}

      {!isLoading && data?.data?.length === 0 && (
        <Text textAlign={'center'}>No products found. Sorry!</Text>
      )}

      {!isLoading && data?.data?.length > 0 && (
        <Box boxShadow="xs" p="6" mt="6" rounded="md" bg="white">
          {data.data.map((item, i) => (
            <Product data={item} key={i} />
          ))}
        </Box>
      )}

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
