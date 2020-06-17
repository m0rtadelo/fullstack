import mongoose from '../database.js'
mongoose.set('debug', true)
// import utils from '../utils'

const valuesSchema = new mongoose.Schema({}, { collection: 'values' })
// valuesSchema.statics.get = utils.get

const vt = mongoose.model('values', valuesSchema)

const VT = {
  get: async (query) => {
    try {
      return await vt.find(query)
    } catch (error) {
      console.error(error)
    }
  }
}

export default VT
