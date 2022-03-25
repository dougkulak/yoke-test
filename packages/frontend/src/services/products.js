import axios from 'axios';

export function fetchProducts() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_ENDPOINT}/api/products`
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
