import { userService } from '../../service/userService.js'

export const createUser = (req, res) => {

    /**
     * if request body is not defined,
     * we response with 400 bad request
     */
    if (Object.entries(req.body).length <= 0) {
        return res.status(400).json({
            message: 'could not create a user'
        });
    }

    return userService.createUser(req.body)
        .then((resp) => {
            return res.status(resp.status).json(resp);
        })
        .catch((resp) => {
            console.error(resp);
            return res.status(resp.status).json(resp);
        });
}