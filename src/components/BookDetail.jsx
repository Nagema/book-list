import React, { useEffect, useState } from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import '../App.css';
import { useParams } from 'react-router';

export function BookDetail() {

    const { id } = useParams()
    const [book, setBookDetail] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`http://localhost:3001/books/${id}`);
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
                    <Card.Text>
                        ISBN: {book.isbn}
                    </Card.Text>
                    <ButtonGroup vertical>       
                        <Button className="mb-3" variant="primary">
                             <a href={book.website}>More info</a>
                        </Button>
                        <Button className="mb-3" variant="secondary">update info</Button>
                    </ButtonGroup>
                </Card.Body>
            </Card>
          </div>
      )
}