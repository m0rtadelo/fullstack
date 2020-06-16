function isValidItem (item, res) {
  if (!item) {
    res.sendStatus(404)
    return false
  }
  return true
}

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

function get (query = {}, offset = 0, limit = 100, singleItem = 0) {
  return new Promise(async (resolve, reject) => {
    let cursor
    const items = []
    try {
      cursor = this.find(query).skip(offset).limit(limit).cursor()
      for (let doc = await cursor.next(); doc != null; doc = await cursor.next()) {
        items.push(doc)
      }
    } catch (error) {
      reject(error)
    }
    if (singleItem) {
      resolve(items[0])
    } else {
      await this.countDocuments(query, async function (error, count) {
        if (error) {
          reject(error)
        } else {
          resolve({
            total: count,
            offset: offset,
            limit: limit,
            data: items
          })
        }
      })
    }
  })
}

async function query (ctx, res, query = {}, offset = 0, limit = 100, singleItem = 0) {
  let item
  try {
    offset = +offset
    limit = +limit
    if (typeof query === 'string') {
      query = JSON.parse(query)
    }
  } catch (error) {
    return res.sendStatus(400)
  }
  if (isNaN(offset) || isNaN(limit)) {
    return res.sendStatus(400)
  }
  try {
    item = (await ctx.get(query, offset, limit, singleItem))
  } catch (error) {
    return res.sendStatus(500)
  }
  if (isValidItem(item, res)) {
    return res.send(item)
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
