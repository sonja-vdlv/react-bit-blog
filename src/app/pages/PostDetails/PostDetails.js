import React, { Component } from 'react';
import fetchPosts from '../../services/fetchPosts';

class PostDetails extends Component {
    constructor(props) {
        super(props);

        this.postId = 2;

        this.state = {
            post: {},
            author: {},
        };
    }

    componentDidMount() {
        this.loadPost()// this.postId
    }

    loadPost() {
        return fetch("https://jsonplaceholder.typicode.com/posts/2")
            .then((response) => {
                return response.json()
            })
            .then((post) => {
                this.setState({
                    post: post
                })

                console.log('user: ', post);
                // fetch post.userId
            })

    }




    render() {
        return <h2>{this.state.post.id}</h2>;
    }
}

export default PostDetails;
