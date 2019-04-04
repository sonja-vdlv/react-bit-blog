import React, { Component } from 'react';
import fetchPosts from '../services/fetchPosts'

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
                // SET STATE 
            })
    }

    render() {
        return (
            <h2> This is post list page</h2 >
        )
    }

}

export default PostList;