import { User } from "../../entity/User.js"
import { userProvider } from "../../provider/userProvider.js"

export const createUser = (userData) => {

    const newUser = new User(userData);
    return userProvider.createUser(newUser);
}