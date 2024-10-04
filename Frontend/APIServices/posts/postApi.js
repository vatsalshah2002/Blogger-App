import axios from 'axios';

//const BASE_URL = "http://localhost:5000/api/v1/posts"; //!Create post api
const BASE_URL = "https://blogger-app-api.vercel.app/"
export const createPostAPI = async (postData) => {

    const response = await axios.post(`${BASE_URL}/create`, {
        //title: postData.title,
        description: postData.description
    });
    return response.data;

};

export const fetchAllData = async () => {
    try {
        const response = await axios.get(BASE_URL);
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch posts');
    }
};

export const fetchPost = async (postId) => {
   
    try {
        const response = await axios.get(`${BASE_URL}/${postId}`); // Ensure postId is a valid value
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch post with id: ${postId}`);
    }
};

export const updatePostAPI = async (postData) => {
    console.log(postData);
    const response = await axios.put(`${BASE_URL}/${postData?.postId}`, {
      title: postData.title,
      description: postData.description,
    });
    return response.data;
  };

  export const deletePostAPI = async (postId) => {
    const posts = await axios.delete(`${BASE_URL}/${postId}`);
    return posts.data;
  };
