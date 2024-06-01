import axios from 'axios';

const {VITE_SERVER_API} = import.meta.env;

export const listUsers = (user) => {
  const url = `${VITE_SERVER_API}/users`;
  return axios.get(url).then((resp) => resp.data);
};