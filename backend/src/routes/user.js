import express from 'express';
import utils from '../utils';

const router = express.Router();

router.get('/', async (req, res) => {
  if (utils.isAuthorized(req, res)) {
    return res.send(Object.values(await req.context.models.users));
  }
});

router.get('/:userId', (req, res) => {
  if (utils.isAuthorized(req, res)) {
    const item = req.context.models.users[req.params.userId];
    if(utils.isValidItem(item, res)) {
      return res.send(item);
    }
  }
});

export default router;
