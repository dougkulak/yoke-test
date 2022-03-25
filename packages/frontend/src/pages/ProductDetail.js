import React from 'react';
import PageHeading from '../components/PageHeading';
import {Button, Center} from '@chakra-ui/react';
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
        subtitle={`$${data.data.data.price}`}
      />

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
    </>
  );
}

export default ProductDetail;
