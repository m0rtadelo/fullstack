import express from 'express';
import utils from '../utils';

const router = express.Router();

router.get('/', async (req, res) => {
    return res.send(Object.values(await req.context.models.users.get()));
});

router.post('/', async (req, res) => {
    let item;
    try {
      item = Object.values(await req.context.models.users.find(req.body));
    } catch (error) {}
    if(utils.isValidItem(item, res)) {
      return res.send(item);
    }
})
router.get('/:userId', async (req, res) => {
    let item;
    try {
      item = Object.values(await req.context.models.users.get(req.params.userId))[0];
    } catch (error) {}
    if(utils.isValidItem(item, res)) {
      return res.send(item);
    }
});

export default router;
