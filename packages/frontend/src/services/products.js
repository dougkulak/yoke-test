import axios from 'axios';

export function fetchProducts() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `${process.env.API_BASE_URL}/api/products`
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
