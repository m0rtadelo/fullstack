import mongoose from '../database.js'
import utils from '../utils'

var userSchema = new mongoose.Schema({})
userSchema.statics.get = utils.get

var db = mongoose.model('users', userSchema);
const Users = {

  get: async (query, offset, limit) => {
    return await db.get(query, offset, limit);
  },
  login: async (query) => {
    return await db.find(query);
  }
}

export default Users