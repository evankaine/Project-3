import mongoose from "mongoose";
const Schema = mongoose.Schema;

const postSchema = new Schema ({
  username: { type: String, required: true },
  imgURL: { type: String, required: true },
  caption: { type: String, required: true },
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  likes: { type: Number, required: false }
  },
  { timestamps: true }
)

export default mongoose.model('Post', postSchema)