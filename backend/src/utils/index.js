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

export default {
    isValidItem: isValidItem,
    isAuthorized: isAuthorized
}