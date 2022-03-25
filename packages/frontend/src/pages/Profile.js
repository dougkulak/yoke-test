import React from 'react';
import PageHeading from '../components/PageHeading';
import {useQuery} from 'react-query';
import {fetchUser} from '../services/users';
import Loader from '../components/Loader';
import {
  Avatar,
  Box,
  Divider,
  Heading,
  HStack,
  Stat,
  StatLabel,
  StatNumber,
  Text,
} from '@chakra-ui/react';

function Profile() {
  const {isLoading, data} = useQuery(
    'profile',
    async () => {
      try {
        const data = await fetchUser(
          process.env.REACT_APP_FIREBASE_PRIMARY_USER_ID
        );
        return {data};
      } catch (err) {
        console.error(err);
      }
    },
    {keepPreviousData: true}
  );

  return (
    <>
      <PageHeading
        title={'Profile'}
        subtitle={'View your account details below.'}
      />

      {isLoading && <Loader />}

      {!isLoading && !data?.data && (
        <Text textAlign={'center'}>No profile found. Sorry!</Text>
      )}

      {!isLoading && data?.data && (
        <Box boxShadow="xs" p="6" mt="6" rounded="md" bg="white">
          <HStack>
            <Avatar name={data.data.data.name} mr={2} />
            <div>
              <strong>{data.data.data.name}</strong>
              <br />
              {data.data.data.email}
            </div>
          </HStack>
          <Divider my={4} />
          <Stat textAlign={'center'}>
            <StatLabel>Account Balance</StatLabel>
            <StatNumber>${data.data.data.accountBalance}</StatNumber>
          </Stat>
          <Divider my={4} />
          <Heading size={'xs'}>Order History</Heading>
        </Box>
      )}
    </>
  );
}

export default Profile;
