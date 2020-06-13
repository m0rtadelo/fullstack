import mongoose from '../database.js'

var db = mongoose.model('users', new mongoose.Schema({}));

const Users = {
    get: async (id) => {
      return await db.find(id ? {_id: id } : id);      
    },
    find: async (query) => {
      return await db.find(query);
    }
  }
  
  export default Users