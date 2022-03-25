import React from 'react';
import {Center, Spinner} from '@chakra-ui/react';

function Loader() {
  return (
    <Center>
      <Spinner size={'xl'} />
    </Center>
  );
}

export default Loader;
