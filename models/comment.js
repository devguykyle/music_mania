const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const comment = new Schema({
  _id: ObjectId,
  title: String,
  details: String,
  date: Date
});

module.exports = {

  comment : comment;

}
