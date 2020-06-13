import mongoose from '../database.js'

var db = mongoose.model('items', new mongoose.Schema({}));

const Items = {
    get: async (id) => {
      return await db.find(id ? {_id: id } : id);      
    },
    find: async (query) => {
      return await db.find(query);
    }
  }
  
  export default Items