
import api from "./apiConfig";

export const getPosts = async () => {
  try {
    const res = await api.get("/posts");
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const getPost = async (id) => {
  try {
    console.log(id)
    const res = await api.get(`/posts/${id}`);
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
  
  await api.delete(`/posts/${id}`);
    
};


export const updatePost = async (id, post) => {
  try {
    const res = await api.put(`/posts/${id}`, post);
    return res.data;
  } catch (e) {
    throw e;
  }
};