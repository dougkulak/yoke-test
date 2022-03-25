import React from 'react';
import {Heading, Text} from '@chakra-ui/react';

function PageHeading({title, subtitle}) {
  return (
    <>
      <Heading mt={10}>{title}</Heading>
      <Text mb={10} fontSize="lg">
        {subtitle}
      </Text>
    </>
  );
}

export default PageHeading;
