import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { GET_BOOKS_QUERY } from "../queries/queries.js"
import BookDetails from "./BookDetails"

const BookList = () =>{
  const { loading, data } = useQuery(GET_BOOKS_QUERY, {
    variables: { language: 'english' },
  })

  const [selectedBookId, setSelectedBookId] = React.useState(null)


  if (loading) {
    return (
      <div>
        Loading books..
      </div>
    )
  } else {
    return (
      <div className="book-list">
        {
          data.books.map((book, key) => {
              return(
                <li key={key} onClick={(e)=>setSelectedBookId(book.id)}>
                  {book.name}
                </li>
              )
          })
        }
        <BookDetails selectedBookId={selectedBookId}/>
      </div>
    )
  }
}

export default BookList