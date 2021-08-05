import axios from "axios";

const getToken = () => {
  return new Promise((resolve) => {
    resolve(`Bearer ${localStorage.getItem("token") || null}`);
  });
};

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? null : "http://localhost:2222/api",
});

<<<<<<< HEAD
//get all users
export const getUsers = async () => {
    const res = await axios.get(`${apiURL}/users`)
    return res.data
}
//get a user
export const getUser = async (data) => {
    const res = await axios.post(`${apiURL}/users/signin`, data)
    return res.data
}
//create a user
export const createUser = async (user) => {
    const res = await axios.post(`${apiURL}/users/signup`, user)
    return res.data
}
//get all posts
export const getPosts = async () => {
    const res = await axios.get(`${apiURL}/posts`)
    return res.data
}
//get a post
export const getPost = async (id) => {
    const res = await axios.get(`${apiURL}/posts/${id}`)
    return res.data
}
//create a post
export const createPost = async (post) => {
    const res = await axios.post(`${apiURL}/posts`, post)
    return res.data
}
//delete a post
export const deletePost = async (id) => {
  const res = await axios.delete(`${apiURL}/posts/${id}`)
  return res.data
=======
api.interceptors.request.use(
  async (config) => {
    config.headers["Authorization"] = await getToken();
    return config;
  },
  (error) => {
    console.log("Request Error: ", error.message);
    return Promise.reject(error);
  }
);
>>>>>>> d01ac63323b3d9fd67111d42a0ae95c9fbb715e7

export default api;