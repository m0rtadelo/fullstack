import express from 'express';
import utils from '../utils';

const router = express.Router();

router.get('/', async (req, res) => {
    return res.send(Object.values(await req.context.models.items.get()));
});

export default router;
