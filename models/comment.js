import mongoose from 'mongoose'
const Schema = mongoose.Schema

const CommentSchema = new Schema({
  comment: {type: String, ref: 'Post', required: false}
}, { timestamps: true })

export default mongoose.model('Comment', CommentSchema)