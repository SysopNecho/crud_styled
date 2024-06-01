import { getEndpoints } from "../../config/endpoint.js";
import { DB } from "../../db/db.js";

const {SERVER_API} = getEndpoints();

/**
 * this provider must connect with other backend services
 * using SERVER_API by environment, but in this case
 * we are using a local db, and simulate the actions to
 * list users returning a promise object
 */

/**
 * gets the users list from endpoint `SERVER_API/users`
 * @return Promise
 */
export const listUsers = () => {
    const endpoint = `${SERVER_API}/users`;
    console.log(`fetching data from ${endpoint}`);
    return Promise.resolve({
        status: 200,
        data: DB.users
    })
};