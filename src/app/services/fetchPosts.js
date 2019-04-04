import PostList from '../../app/components/PostList';

const fetchPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/comments')
        .then((posts) => {
            return posts.json()
        })
        .then((data) => {
            const posts = data.slice(0, 15)
            return posts
        })

}

export default fetchPosts

// const displayPost = data.map(item => {
//     const { id, name, body } = item
//     return new PostList(id, name, body)
// })
// return displayPost