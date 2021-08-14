const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//file콜렉션을 만듬
const keepSchema = mongoose.Schema({
  userTo: {
    type: Schema.Types.ObjectId,
    ref:'User'
  },
  userFrom: {
    type: Schema.Types.ObjectId,
    ref:'User'
  }

}, {timestamps : true})

const Keep = mongoose.model("Keep", keepSchema);

module.exports = { Keep }