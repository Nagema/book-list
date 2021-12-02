import React, { useEffect, useState } from 'react';
import logo from '../logo.svg';
import { Card, Button } from 'react-bootstrap';
import '../App.css';
import { useParams } from 'react-router';

export function BookDetail() {

    const { id } = useParams()
    const [book, setBookDetail] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`https://my-json-server.typicode.com/Nagema/book-list/books/${id}`);
            const bookData = await data.json()
            setBookDetail(bookData)
          }
        fetchData()
      }, [id])

      return (
          <div className="detail">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={book.image} style={{ height: '20rem' }} />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                        {book.description}
                    </Card.Text>
                    <Button variant="primary">Go to website</Button>
                </Card.Body>
            </Card>
          </div>
      )
}