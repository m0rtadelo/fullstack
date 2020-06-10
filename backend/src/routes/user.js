import express from 'express';
import utils from '../utils';

const router = express.Router();

router.get('/', async (req, res) => {
  if (utils.isAuthorized(req, res)) {8
    return res.send(Object.values(await req.context.models.users.get()));
  }
});

router.get('/:userId', async (req, res) => {
  if (utils.isAuthorized(req, res)) {
    let item;
    try {
      item = Object.values(await req.context.models.users.get(req.params.userId));
    } catch (error) {}
    if(utils.isValidItem(item, res)) {
      return res.send(item);
    }
  }
});

export default router;
