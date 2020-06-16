import mongoose from '../database.js'
import utils from '../utils'

var userSchema = new mongoose.Schema({
  pwd: { type: String, default: null, select: false }
})
userSchema.statics.get = utils.get

var db = mongoose.model('users', userSchema)
const Users = {

  get: async (query, offset, limit, singleItem) => {
    return await db.get(query, offset, limit, singleItem)
  },
  login: async (query) => {
    return await db.find(query)
  }
}

export default Users
