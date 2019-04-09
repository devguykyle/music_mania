const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const song = new Schema({
  _id: ObjectId,
  title: String,
  url: String,
  dateAdded: Date
});

module.exports = {

  song : song;

}
