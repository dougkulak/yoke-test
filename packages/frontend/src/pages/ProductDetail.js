import React, {useEffect} from 'react';
import PageHeading from '../components/PageHeading';
import {Badge, Box, Button, Center, Heading, Text} from '@chakra-ui/react';
import {NavLink, useParams} from 'react-router-dom';
import {ArrowForwardIcon, StarIcon} from '@chakra-ui/icons';
import {useQuery} from 'react-query';
import {fetchProduct} from '../services/products';
import Loader from '../components/Loader';

function Product({data}) {
  return (
    <Box borderWidth="1px" borderRadius="lg" mb="4" overflow="hidden">
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
  );
}

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
        subtitle={`${data.data.data.price}`}
      />

      <Center>
        <Button
          mt={8}
          as={NavLink}
          to={`/checkout/${data.data.id}`}
          colorScheme="pink"
          variant="solid">
          Buy Now
        </Button>
      </Center>
    </>
  );
}

export default ProductDetail;
