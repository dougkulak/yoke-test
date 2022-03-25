import React from 'react';
import PageHeading from '../components/PageHeading';
import {Box, Button, Center, Divider, Heading, Text} from '@chakra-ui/react';
import {NavLink, useParams} from 'react-router-dom';
import {useQuery} from 'react-query';
import {orderProduct} from '../services/orders';
import Loader from '../components/Loader';
import {ArrowLeftIcon} from '@chakra-ui/icons';

function Checkout() {
  const params = useParams();

  const {isLoading, data} = useQuery(['checkout', params.id], async () => {
    try {
      const data = await orderProduct(params.id);
      return {data};
    } catch (err) {
      console.error(err);
    }
  });

  if (isLoading) return <Loader />;

  return (
    <>
      {!isLoading && data?.data.type === 'success' && (
        <>
          <PageHeading
            title={'Order Confirmation'}
            subtitle={`Thank you for your purchase!`}
          />

          <Divider my={4} />

          <Box boxShadow="xs" p="6" mt="6" rounded="md" bg="white">
            <Heading size={'sm'} textAlign={'center'}>
              Order #: {data.data.orderRef}
            </Heading>
            <Divider my={4} />
            <Text>
              <strong>{data.data.productData.data.name}</strong>
            </Text>
            <Text>${data.data.productData.data.price.toFixed(2)} / each</Text>
            <Text>Quantity: 1</Text>
          </Box>

          <Divider my={4} />

          <Center>
            <Button
              mt={8}
              as={NavLink}
              to={`/profile`}
              colorScheme="purple"
              variant="solid">
              View Profile
            </Button>
          </Center>
        </>
      )}

      {!isLoading && data?.data.type === 'error' && (
        <>
          <PageHeading title={'Order Error'} subtitle={`An error occurred.`} />

          <Divider my={4} />

          <Box boxShadow="xs" p="6" mt="6" rounded="md" bg="white">
            <Heading size={'sm'} textAlign={'center'}>
              {data.data.message}
            </Heading>
            <Divider my={4} />
            <Text textAlign={'center'}>Please try again later.</Text>
          </Box>

          <Divider my={4} />

          <Center>
            <Button
              mt={8}
              as={NavLink}
              to={`/products/${params.id}`}
              leftIcon={<ArrowLeftIcon />}
              colorScheme="purple"
              variant="outline">
              Back to Product
            </Button>
          </Center>
        </>
      )}
    </>
  );
}

export default Checkout;
