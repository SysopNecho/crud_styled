import { userService } from '../../service/userService.js'

export const deleteUser = (req, res) => {

  const id = Number(req.params.id) || 0;

  /**
   * if params.id is not defined it will be 0
   * we response with 400 bad request
   */
  if (!id) {
    return res.status(400).json({
        message: 'could not delete a user'
    });
  }

  return userService.deleteUser(id)
  .then((resp) => {
      return res.status(resp.status).json(resp);
  })
  .catch((resp) => {
      console.error(resp);
      return res.status(resp.status).json(resp);
  });
}