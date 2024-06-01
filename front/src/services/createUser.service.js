import axios from 'axios';

const {VITE_SERVER_API} = import.meta.env;

export const createUser = (user) => {
  const url = `${VITE_SERVER_API}/users`;
  return axios.post(url, user).then((resp) => resp.data);
};