const CRUD = {
  isValidItem: function (item, res) {
    if (!item) {
      res.sendStatus(404)
      return false
    }
    return true
  },

  get: function (query = {}, offset = 0, limit = 100, singleItem = 0) {
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
  },
  query: async function (ctx, res, query = {}, offset = 0, limit = 100, singleItem = 0) {
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
    if (CRUD.isValidItem(item, res)) {
      return res.send(item)
    }
  }
}

export default CRUD
