const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CommentSchema = new Schema({
  comment: { type: String, required: true },
  posts: { type: Schema.Types.ObjectId, ref: 'Post', required: true }
}, { timestamps: true })

module.exports = mongoose.model('Comment', CommentSchema)