import AuthorList from '../../app/components/AuthorList';

const fetchAuthors = () => {
    return (
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((authors) => {
                return authors.json()
            })
            .then((data) => {
                const authors = data.slice(0, 6)
                return authors
            })
    )
}

export default fetchAuthors;