import gql from 'graphql-tag';

const GET_BOOKS_QUERY = gql`
  {
    books{
      name
      id
    }
  }
`

const GET_AUTHOR_QUERY = gql`
  {
    authors{
      name
      id
    }
  }
`

const ADD_BOOK_MUTATION = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!){
    addBook(name: $name, genre: $genre, authorId: $authorId){
      name
      genre
    }
  }
`

const GET_BOOK_DETAILS = gql`
  query($id: ID){
    book(id:$id){
      id
      name
      author{
        id
        name
        age
        books{
          name
          id
        }
      }
    }
  }
`

export { GET_BOOKS_QUERY, GET_AUTHOR_QUERY, ADD_BOOK_MUTATION, GET_BOOK_DETAILS}