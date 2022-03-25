import React from 'react';
import {Heading, Text} from '@chakra-ui/react';

function PageHeading({title, subtitle}) {
  return (
    <>
      <Heading mt={10} textAlign={'center'}>
        {title}
      </Heading>
      <Text mb={10} fontSize="lg" textAlign={'center'}>
        {subtitle}
      </Text>
    </>
  );
}

export default PageHeading;
