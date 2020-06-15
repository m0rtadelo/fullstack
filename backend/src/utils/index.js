function isValidItem(item, res) {
    if (!item) {
        res.sendStatus(404)
        return false
    }
    return true
}

function isAuthorized(req, res) {
    if (!req.session.user) {
        res.sendStatus(401)
        return false
    }
    return true
}

function isAdmin(req, res) {
    if (req.session.user && req.session.user.admin) {
        return true
    } else {
        res.sendStatus(403)
        return false
    }
}

function hasRead(req, res) {
    if (req.session.user && req.session.user.read) {
        return true
    } else {
        res.sendStatus(403)
        return false
    }
}

function get(query = {}, offset = 0, limit = 100) {
    try {
        if (typeof query === 'string') {
            query = JSON.parse(query)
        }
    } catch (error) {
        query = {}
    }
    console.log(query)
    console.log(offset)
    console.log(limit)
    return new Promise(async (res, rej) => {
        const cursor = this.find(query).skip(offset).limit(limit).cursor()
        const items = []
        for (let doc = await cursor.next(); doc != null; doc = await cursor.next()) {
            items.push(doc)
        }
        await this.countDocuments(query, async function (err, count) {
            if (err) {
                rej(err)
            } else {
                res({
                    total: count,
                    offset: offset,
                    limit: limit,
                    data: items
                })
            }
        })
    })
}

async function query(ctx, res, query, offset, limit) {
    let item;
    try {
        item = (await ctx.get(query, offset, limit));
    } catch (error) { }
    if (isValidItem(item, res)) {
        return res.send(item);
    }
}

export default {
    isValidItem,
    isAuthorized,
    isAdmin,
    hasRead,
    get,
    query
}