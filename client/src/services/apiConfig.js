import axios from "axios"

const apiURL = "http://localhost:2222/api"


//get all users
export const getUsers = async () => {
    const res = await axios.get(`${apiURL}/users`)
    return res.data
}
//get a user
export const getUser = async (id) => {
    const res = await axios.get(`${apiURL}/users/${id}`)
    return res.data
}
//create a user
export const createUser = async (user) => {
    const res = await axios.post(`${apiURL}/users`,user)
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

}
