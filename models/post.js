const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const post = new Schema({
  _id: ObjectId,
  title: String,
  body: String,
  date: Date
});

module.exports = {

  post : post;

}
