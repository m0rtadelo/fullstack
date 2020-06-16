import mongoose from '../database.js'
import utils from '../utils'

var itemSchema = new mongoose.Schema({})
itemSchema.statics.get = utils.get

var db = mongoose.model('items', itemSchema)

const Items = {
  get: async (query, offset, limit, singleItem) => {
    console.log('item get')
    return await db.get(query, offset, limit, singleItem)
  }
}

export default Items
