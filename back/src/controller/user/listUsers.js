import { userService } from "../../service/userService.js"

export const listUsers = (_, res) => {
    
    return userService.listUsers()
        .then((response) => {
            return res.status(response.status).json(response);
        })
        .catch((response) => {
            console.error(response);
            return res.status(response.status).json(response);
        })
}