import 'dotenv/config';
import express  from 'express'
import uuid from 'uuid/v4';
import session from 'express-session';

import routes from './routes';
import models from './models';

const app = express();

// add & configure middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  req.context = {
    models,
    me: 'admin',
  }
  next();
});
app.use(session({
  genid: (req) => {
    return uuid()
  },
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
  // cookie: { secure: process.env.SESSION_SECURE }
}))

// routes
app.use('/login', routes.login);
app.use('/users', routes.user);

// listen
app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`)
})

export default app;