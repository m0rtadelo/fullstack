import mongoose from '../database.js'
import utils from '../utils'

const userSchema = new mongoose.Schema({
  pwd: { type: String, default: null, select: false }
})
userSchema.statics.get = utils.get

var users = mongoose.model('users', userSchema)
const Users = {

  get: async (query, offset, limit, singleItem) => {
    return await users.get(query, offset, limit, singleItem)
  },
  login: async (query) => {
    return await users.find(query)
  }
}

export default Users
