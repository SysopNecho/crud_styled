import { userProvider } from '../../provider/userProvider.js'

export const deleteUser = (id) => {
  return userProvider.deleteUser(id);
}