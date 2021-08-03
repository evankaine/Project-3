import api from "./apiConfig"

//rename
export const getAllPost = async () => {
  try {
    const res = await api.get("/posts")
    return res.data
  } catch (e) {
    throw e
  }
}
//rename
export const createPost = async (input) => {
  try {
    const res = await api.post("/posts", input);
    return res.data;
  } catch (e) {
    throw e;
  }
}