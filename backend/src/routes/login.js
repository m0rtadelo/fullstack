import express from 'express'
import utils from '../utils'

const router = express.Router()

router.get('/', (req, res) => {
  return res.send(`
    <form method="POST" action="/login">
        User: <input type="text" name="user"><br>
        Pass: <input type="password" name="pwd">
        <input type="submit" value="Login">
    </form>
    `)
})

router.post('/', async (req, res) => {
  let item
  try {
    item = ((await req.context.models.users.login({ user: req.body.user, pwd: req.body.pwd }))[0])
  } catch (error) {
    res.statusCode(500)
  }
  if (item) {
    req.session.user = item
    return res.send(item)
  }
  return res.sendStatus(401)
})

router.delete('/', (req, res) => {
  if (utils.isValidItem(req.session.user, res)) {
    req.session.user = undefined
    return res.send(req.session.destroy())
  }
})

export default router
