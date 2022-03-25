import axios from 'axios';

export function orderProduct(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_ENDPOINT}/api/checkout/${id}`
      );

      if (response.status === 200) {
        resolve(response.data);
      }

      reject(response.data);
    } catch (error) {
      reject(error);
    }
  });
}

export function fetchOrdersByUser(userId) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_ENDPOINT}/api/orders/${userId}`
      );

      if (response.status === 200) {
        resolve(response.data);
      }

      reject(response.data);
    } catch (error) {
      reject(error);
    }
  });
}
