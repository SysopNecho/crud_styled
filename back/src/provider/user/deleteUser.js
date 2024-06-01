import { getEndpoints } from "../../config/endpoint.js";
import { DB } from "../../db/db.js";

const {SERVER_API} = getEndpoints();

/**
 * this provider must connect with other backend services
 * using SERVER_API by environment, but in this case
 * we are using a local db, and simulate the actions to
 * delete users returning a promise object
 */

/**
 * gets the users list from endpoint `SERVER_API/users`
 * @return Promise
 */
export const deleteUser = (id) => {
    const endpoint = `${SERVER_API}/users/${id}`;
    console.log(`delete user using endpoint ${endpoint}`);

    /**
     * we need to find the user index in the 
     * users collection by using its id, then
     * with this index remove it
     */
    const index = DB.users.map((user) => user.id).indexOf(id);

    /**
     * remove user from user collection
     */
    DB.users.splice(index, 1);

    /**
     * success response
     */
    return Promise.resolve({
        status: 200,
        data: {
          message: `user with id: ${id} was deleted`
        }
    })
};