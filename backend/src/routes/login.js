import express from 'express';
import utils from '../utils';

const router = express.Router();

router.get('/', (req, res) => {
    return res.send(`
    <form method="POST" action="/login">
        User: <input type="text" name="user"><br>
        Pass: <input type="password" name="password">
        <input type="submit" value="Login">
    </form>
    `);
});

router.post('/', (req, res) => {
    const { password, ...user } = req.body;
    req.session.user = user;
    return res.send(user);
})

router.delete('/', (req, res) => {
    if (utils.isValidItem(req.session.user, res)) {
        return res.send(req.session.destroy());
    }
})

export default router;