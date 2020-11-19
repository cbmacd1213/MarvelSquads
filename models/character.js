const mongoose = require('mongoose');
const { boolean } = require('yargs');
const user = require('./user');
const Schema = mongoose.Schema;

const characterSchema = new Schema({
  apiID: String,
  user: {type: Schema.Types.ObjectId},
  name: String 

  
}, {
  timestamps: true
});



module.exports = mongoose.model('Character', characterSchema);