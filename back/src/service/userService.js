import { createUser } from './user/createUser.js';
import { listUsers } from './user/listUsers.js';
import { deleteUser } from './user/deleteUser.js';

export const userService = {
    listUsers,
    createUser,
    deleteUser
}