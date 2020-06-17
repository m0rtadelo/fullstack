import express from 'express'
import utils from '../utils'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    return await req.context.models.vt.get({})
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

router.get('/:itemId', async (req, res) => {
  return await utils.query(req.context.models.items, res, { _id: req.params.itemId }, req.query.offset, req.query.limit, 1)
})

export default router
