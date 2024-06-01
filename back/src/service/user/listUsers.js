import { userProvider } from '../../provider/userProvider.js'

export const listUsers = () => {
    return userProvider.listUsers();
}