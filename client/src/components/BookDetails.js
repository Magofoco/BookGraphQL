import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { GET_BOOK_DETAILS } from "../queries/queries.js"


const BookDetails = ({selectedBookId}) =>{

  const { loading, data } = useQuery(GET_BOOK_DETAILS, {
    variables: { id: selectedBookId },
  })



  const bookDetails = () =>{
    if (data.book) {
      return (
        <div>
          <h2>{data.book.name}</h2>
          <p>{data.book.genre}</p>
          <p>{data.book.author.name}</p>
          <p>All books by this author:</p>
          <ul className="other-books">
            {
              data.book.author.books.map((book, key) => {
                  return(
                    <li key={key}>
                      {book.name}
                    </li>
                  )
              })
            }
          </ul>
        </div>
      )
    } else {
      return <p>No book selected</p>
    }
  }



  return (
    <div id="book-details">
      <p>Book details:</p>
      { loading
        ?
        <p>Loading book detail</p>
        :
        bookDetails()
      }
    </div>
    )
  
}

export default BookDetails