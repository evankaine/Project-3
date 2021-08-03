import mongoose from 'mongoose'
const Schema = mongoose.Schema

const PostSchema = new Schema({
  imgURL: { type: String, required: true },
  caption: { type: String, required: true },
  user_id: { type: Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true })

export default mongoose.model('Post', PostSchema)