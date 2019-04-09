const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const event = new Schema({
  _id: ObjectId,
  title: String,
  details: String,
  date: Date
});

module.exports = {

  event : event;

}
