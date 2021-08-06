import Post from "../models/post.js";

export const getPosts = async (req, res) => {
  try {
    const post = await Post.find({});
    res.json(post);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const post = new Post(req.body);
    console.log(req.user)
    post.user_id = req.user.id
    await post.save();
    res.status(201).json(post);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id).populate(user_id);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ error: "Post Not Found" });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};


// const deletePost = async (req,res) => {
//   try {
//       //find and delete the post
//       const post = await Post.findByIdAndDelete(req.params.id)
//       //get the user by the user ID in the post and remove it from the array
//       await User.findByIdAndUpdate({_id: post.user_id}, {$pull: {posts: post._id}})
//       if (post) {
//           return res.status(200).send("Post Deleted")
//       } else {
//           return res.status(404).send("Post Not Found")
//       }
//   } catch(err) {
//       return res.status(500).json({error: err.message})
//   }
// }