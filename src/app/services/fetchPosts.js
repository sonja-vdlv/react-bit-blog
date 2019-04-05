import PostList from '../../app/components/PostList';

const fetchPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            const posts = data.slice(0, 10)
            return posts
        })

}

export default fetchPosts

// const displayPost = data.map(item => {
//     const { id, name, body } = item
//     return new PostList(id, name, body)
// })
// return displayPost