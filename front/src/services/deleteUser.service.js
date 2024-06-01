import axios from 'axios';

const {VITE_SERVER_API} = import.meta.env;

export const deleteUser = (id) => {
  const url = `${VITE_SERVER_API}/users/${id}`;
  return axios.delete(url).then((resp) => resp.data);
};