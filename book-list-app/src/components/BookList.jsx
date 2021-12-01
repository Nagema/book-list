import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function BookList() {

    const [bookList, setBooks] = useState([])

    useEffect(() => {
        fetchData()
      }, [])

    const fetchData = async () => {
        const data = await fetch('https://my-json-server.typicode.com/Nagema/book-list/books');
        const books = await data.json()
        setBooks(books)
      }
    
      return (
          <div>
              <ListGroup>
                 {
                     bookList.map(item => (
                        <ListGroup.Item key={item.id}>
                             <Link to={`/bookList/${item.id}`}>
                                {item.title}
                             </Link>
                        </ListGroup.Item>
                     ))
                 }
              </ListGroup>
          </div>
      )
}
