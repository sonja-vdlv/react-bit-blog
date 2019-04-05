import React, { Component } from 'react';
import fetchPosts from '../services/fetchPosts'
// import PostInfo from './PostInfo'

class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        this.loadPost()
    }

    loadPost() {
        fetchPosts()
            .then((posts) => {
                console.log(posts);
                this.setState({
                    posts: posts
                })
            })
    }

    render() {

        // const postsJSX = this.state.posts
        return (
            <>
                <div>
                    <h1 className="hometitle">POSTS</h1>
                    {this.state.posts.map((post) => (
                        <div key={post.id} className="posts">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    ))}
                </div>
            </>

        );


    }
}
export default PostList;