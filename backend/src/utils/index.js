function isValidItem(item, res) {
    if(!item) {
        res.sendStatus(404)
        return false
    }
    return true
}

function isAuthorized(req, res) {
    if(!req.session.user) {
        res.sendStatus(401)
        return false
    }
    return true
}

function isAdmin(req, res) {
    if(req.session.user && req.session.user.admin) {
        return true
    } else {
        res.sendStatus(403)
        return false
    }
}

export default {
    isValidItem: isValidItem,
    isAuthorized: isAuthorized,
    isAdmin: isAdmin
}