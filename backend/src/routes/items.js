import express from 'express';
import utils from '../utils';

const router = express.Router();

router.get('/', async (req, res) => {
  return await utils.query(req.context.models.items, res, req.query.query, req.query.offset, req.query.limit)
});

router.get('/:itemId', async (req, res) => {
  return await utils.query(req.context.models.items, res, {_id: req.params.itemId }, req.query.offset, req.query.limit)
});

export default router;
