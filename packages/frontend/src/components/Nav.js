import {Button, HStack, Link} from '@chakra-ui/react';
import React from 'react';
import {NavLink} from 'react-router-dom';

const nav = [
  {label: 'Home', path: '/'},
  {label: 'About', path: '/about'},
  {label: 'Products', path: '/products'},
];

function Nav() {
  return (
    <HStack as="nav" spacing="5">
      {nav.map((item) => (
        <Link key={item.label} as={NavLink} to={item.path}>
          <Button variant="nav"> {item.label} </Button>
        </Link>
      ))}
    </HStack>
  );
}

export default Nav;
