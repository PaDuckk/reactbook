const mongoose = require('mongoose');

const {
  Schema
} = mongoose;

const Post = new Schema({
  title: String,
  body: String,
  tags: [String], //문자 배열
  publishDate: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model('Post', Post);