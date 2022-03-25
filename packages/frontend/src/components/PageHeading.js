import React from 'react';
import {Heading, Text} from '@chakra-ui/react';

function PageHeading({title, subtitle}) {
  return (
    <>
      <Heading>{title}</Heading>
      <Text>{subtitle}</Text>
    </>
  );
}

export default PageHeading;