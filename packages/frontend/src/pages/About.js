import React from 'react';
import PageHeading from '../components/PageHeading';
import {Divider, Text} from '@chakra-ui/react';

function About() {
  return (
    <>
      <PageHeading
        title={'About Us'}
        subtitle={"We're a popular grocery store, in a way."}
      />
      <Divider />
      <Text>
        You know what really makes us great? It's our low prices. Definitely.
      </Text>
    </>
  );
}

export default About;
