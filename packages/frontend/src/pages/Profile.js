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
import {fetchOrdersByUser} from '../services/orders';
import {CheckCircleIcon} from '@chakra-ui/icons';
import {format} from 'date-fns';

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

  const {isLoading: isOrdersLoading, data: ordersData} = useQuery(
    'orders',
    async () => {
      try {
        const data = await fetchOrdersByUser(
          process.env.REACT_APP_FIREBASE_PRIMARY_USER_ID
        );
        console.log('order data, data', data);
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
            <StatNumber>${data.data.data.accountBalance.toFixed(2)}</StatNumber>
          </Stat>
          <Divider my={4} />
          <Heading size={'xs'}>Order History</Heading>

          {isOrdersLoading && <Loader />}

          {!isOrdersLoading && !ordersData?.data && (
            <Text textAlign={'center'}>No orders have been placed yet.</Text>
          )}

          {!isOrdersLoading && ordersData?.data && (
            <Box boxShadow="xs" p="6" mt="6" rounded="md" bg="white">
              {ordersData.data.map((order) => (
                <React.Fragment key={order.id}>
                  <Box>
                    <HStack>
                      <CheckCircleIcon boxSize="6" mr={2} color={'green'} />
                      <div>
                        <Text color={'gray.400'}>Order #: {order.id}</Text>
                        <HStack>
                          <Text fontSize={'xl'} color={'green'}>
                            <strong>${order.data.price.toFixed(2)}</strong>
                          </Text>
                          <Divider orientation="vertical" />
                          <Text>
                            {format(
                              new Date(order.data.date.seconds * 1000),
                              'MM/dd/yyyy hh:mm a'
                            )}
                          </Text>
                        </HStack>
                      </div>
                    </HStack>
                  </Box>
                  <Divider my={4} />
                </React.Fragment>
              ))}
            </Box>
          )}
        </Box>
      )}
    </>
  );
}

export default Profile;
