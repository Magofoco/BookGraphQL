import React from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_AUTHOR_QUERY, ADD_BOOK_MUTATION, GET_BOOKS_QUERY } from "../queries/queries.js"


const AddBook = () =>{
  const { loading, data } = useQuery(GET_AUTHOR_QUERY, {
  })


  const [state, setState] = React.useState({name: '', genre: '', authorId: ''})

  const [addBook] = useMutation(ADD_BOOK_MUTATION);

  const submitForm = (e) =>{
    e.preventDefault()
    addBook({ variables: {name: state.name, genre: state.genre, authorId: state.authorId}, refetchQueries: [{query: GET_BOOKS_QUERY}]});
  }


  return (
    <form id="add-book" onSubmit={ submitForm } >
      <div className="field">
          <label>Book name:</label>
          <input type="text"
            onChange={ (e) => setState({
              ...state,
              name: e.target.value
            })
            }
          />
      </div>
      <div className="field">
          <label>Genre:</label>
          <input type="text"
            onChange={ (e) => setState({
              ...state,
              genre: e.target.value
            })
            }
          />      </div>
      <div className="field">
          <label>Author:</label>
          <select
            onChange={ (e) => setState({
              ...state,
              authorId: e.target.value
            })
            }
          >
              <option>Select author</option>
              { loading
                ?
                <option>Loading...</option>
                :
                data.authors.map((author, i) => 
                  <option key={author.id} value={author.id}>{author.name}</option>
                )
              }
          </select>
      </div>
      <button>+</button>
    </form>
    )
  
}

export default AddBook
