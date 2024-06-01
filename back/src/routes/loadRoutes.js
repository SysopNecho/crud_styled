import cors from 'cors';
import { listUsers } from '../controller/user/listUsers.js';
import { createUser } from '../controller/user/createUser.js';
import { deleteUser } from '../controller/user/delete.js';

export const loadRoutes = (app) => {
    app.use(cors());

    app.get('/users', listUsers);
    app.post('/users', createUser);
    app.delete('/users/:id', deleteUser)
}