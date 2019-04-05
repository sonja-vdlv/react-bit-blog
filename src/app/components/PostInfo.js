import React from 'react'

const PostInfo = (props) => (

    props.posts.map((post) => (
        <div className="post">
            <h2>{post.name}</h2>
            <p>{post.title}</p>
        </div>

    ))
)