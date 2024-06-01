import { getEndpoints } from "../../config/endpoint.js";
import { DB } from "../../db/db.js";

const {SERVER_API} = getEndpoints();

/**
 * this provider must connect with other backend services
 * using SERVER_API by environment, but in this case
 * we are using a local db, and simulate the actions to
 * create an user, and then returning a promise object
 */

/**
 * create an user sending a POST to the endpoint `SERVER_API/users`
 * @return Promise
 */
export const createUser = (newUser) => {
    const endpoint = `${SERVER_API}/users`;
    console.log(`posting data to ${endpoint}`);

    /**
     * find a user in db matching the email
     */
    const user = DB.users.find((user) => {
        return user.email === newUser.email;
    });

    /**
     * if we have a user, then it means the newUser
     * is already registered, then reject the request
     * returning a conflict status code (409)
     */
    if (user) {
        return Promise.reject({
            status: 409,
            message: 'user email already taken'
        })
    }

    /**
     * we need to get the last user id to calculate the 
     * next id for this newUser. With the reduce function
     * we take the last user in base on its id, if the
     * collection is empty, take a empty user object with id = 0
     */
    const lastUser = DB.users.reduce((user, nextUser) => {
        return user.id > nextUser.id ? user : nextUser
    }, {
        id: 0
    });

    /**
     * we set an Id calculated in base on lastUser.id
     * and push it in the users collection
     */
    newUser.id = lastUser.id + 1; 
    DB.users.push(newUser);

    /**
     * response with a status 201 created
     */
    return Promise.resolve({
        status: 201,
        data: {
            message: `user was created. Id: ${newUser.id}`
        }
    });
}