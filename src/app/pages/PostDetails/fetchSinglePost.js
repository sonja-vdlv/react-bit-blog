import PostDetails from "./PostDetails"
const fetchSinglePost = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts/2")
    .then((response) => {
        return response.json()
    })
}

export default fetchSinglePost;