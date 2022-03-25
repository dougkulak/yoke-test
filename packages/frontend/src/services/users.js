import axios from 'axios';

export function fetchUser(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_ENDPOINT}/api/users/${id}`
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

export function fetchUsers() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_ENDPOINT}/api/users`
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
