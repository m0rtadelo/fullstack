import CRUD from './crud'

function isAuthorized (req, res) {
  if (!req.session.user) {
    res.sendStatus(401)
    return false
  }
  return true
}

function isAdmin (req, res) {
  if (req.session.user && req.session.user.admin) {
    return true
  } else {
    res.sendStatus(403)
    return false
  }
}

function hasRead (req, res) {
  if (req.session.user && req.session.user.read) {
    return true
  } else {
    res.sendStatus(403)
    return false
  }
}

export default {
  isValidItem: CRUD.isValidItem,
  isAuthorized,
  isAdmin,
  hasRead,
  get: CRUD.get,
  query: CRUD.query
}
