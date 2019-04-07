import React, { Component } from 'react';
import fetchPosts from '../../services/fetchPosts';
import fetchSinglePost from './fetchSinglePost';

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
        this.loadPost() // this.postId
    }

    loadPost() {
        fetchSinglePost()
            .then((post) => {
                this.setState({
                    post: post
                })

                console.log('user: ', post);
                // fetch post.userId
            })

    }




    render() {
        return(
        <>
        <h2>{this.state.post.title}</h2>
        <p>{this.state.post.body}</p>
        </>
        );
        
    }
}

export default PostDetails;
