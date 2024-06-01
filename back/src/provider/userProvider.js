import { listUsers } from './user/listUsers.js';
import { createUser } from './user/createUser.js';
import { deleteUser } from './user/deleteUser.js';

export const userProvider = {
    listUsers,
    createUser,
    deleteUser
}