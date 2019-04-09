const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const band = new Schema({
  _id: ObjectId,
  bandName: String,
  password: String,
  dateCreated: Date
});

module.exports = {

  band : band;

}
