import React, { Component } from 'react';
import fetchAuthors from '../services/fetchAuthors'

class AuthorList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authors: []
        }
    }
    componentDidMount() {
        this.loadAuthors()
    }

    loadAuthors() {
        fetchAuthors()
            .then((authors) => {
                console.log(authors);
                this.setState({
                    authors: authors
                })
            })

    }

    render() {
        return (
            <>
                <div>
                    <h1>Authors (6)</h1>
                    {this.state.authors.map((author) => (
                        <h2 key={author.id}>{author.name}</h2>
                    ))}



                </div>


            </>
        )
    }


}

export default AuthorList;