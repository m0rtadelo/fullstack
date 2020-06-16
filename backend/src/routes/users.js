import express from 'express'
import utils from '../utils'

const router = express.Router()

router.get('/', async (req, res) => {
  return await utils.query(req.context.models.users, res, req.query.query, req.query.offset, req.query.limit)
})

router.get('/:userId', async (req, res) => {
  return await utils.query(req.context.models.users, res, { _id: req.params.userId }, req.query.offset, req.query.limit, 1)
})

export default router
