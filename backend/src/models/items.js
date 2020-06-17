import mongoose from '../database.js'
import utils from '../utils'

const itemSchema = new mongoose.Schema({}, { collection: 'items' })
itemSchema.statics.get = utils.get

const items = mongoose.model('items', itemSchema)

const Items = {
  get: async (query, offset, limit, singleItem) => {
    return await items.get(query, offset, limit, singleItem)
  }
}

export default Items
