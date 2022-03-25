import React from 'react';
import PageHeading from '../components/PageHeading';
import {Box, Button, Center, Divider, Heading, Text} from '@chakra-ui/react';
import {NavLink, useParams} from 'react-router-dom';
import {useQuery} from 'react-query';
import {fetchProduct} from '../services/products';
import Loader from '../components/Loader';

function ProductDetail() {
  const params = useParams();

  const {isLoading, data} = useQuery(
    ['product', params.id],
    async () => {
      try {
        const data = await fetchProduct(params.id);
        return {data};
      } catch (err) {
        console.error(err);
      }
    },
    {keepPreviousData: true}
  );

  if (isLoading) return <Loader />;

  return (
    <>
      <PageHeading
        title={data.data.data.name}
        subtitle={`ID: ${data.data.id}`}
      />

      <Divider my={4} />

      <Box boxShadow="xs" p="6" mt="6" rounded="md" bg="white">
        <Heading size={'lg'} textAlign={'center'} color={'green'}>
          ${data.data.data.price.toFixed(2)}
        </Heading>

        <Divider my={2} />
        <Text textAlign={'center'}>
          {data.data.data.quantityInStock} left in stock
        </Text>
        <Divider my={2} />

        <Center>
          <Button
            mt={8}
            as={NavLink}
            to={`/checkout/${data.data.id}`}
            colorScheme="purple"
            variant="solid">
            Buy Now
          </Button>
        </Center>
      </Box>

      <Divider my={4} />
    </>
  );
}

export default ProductDetail;
