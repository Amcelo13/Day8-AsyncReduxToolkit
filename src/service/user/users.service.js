import axios from "axios";

export const fetchUsers = () => axios.get("https://jsonplaceholder.typicode.com/users");
export const fetchUserPost = (id) => axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
export const fetchPostComments = (id) => axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
