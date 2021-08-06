
import api from "./apiConfig";

export const getPosts = async () => {
  try {
    const res = await api.get("/posts");
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const createPost = async (input) => {
  try {
    const res = await api.post("/posts", input);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const deletePost = async (id) => {
  await api.delete(`/posts/${id}`)
} 