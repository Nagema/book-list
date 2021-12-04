import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function BookList() {

    const [bookList, setBooks] = useState([])

    const fetchData = async () => {
        const data = await fetch('http://localhost:3001/books');
        const books = await data.json()
        setBooks(books)
    }

    useEffect(() => {
        fetchData()
    }, [])
    
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
