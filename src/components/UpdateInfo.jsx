import React, { useEffect, useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import '../App.css';
import { useParams } from 'react-router';
import { useNavigate } from "react-router-dom";

export function UpdateInfo() {

  const { id } = useParams()
  const [book, setBookDetail] = useState({})
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setBookDetail({
      ...book,
      [event.target.name]: event.target.value
    })
  }

  const saveData = (event) => {
    event.preventDefault()
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book)
    };
    fetch(`${process.env.REACT_APP_API}/api/books/${id}`, requestOptions)
      .then(response => response.json())
      .then(() => {
        navigate(`/bookDetail/${id}`, { replace: true });
      })
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`${process.env.REACT_APP_API}/api/books/${id}`);
      const bookData = await data.json()
      setBookDetail(bookData)
    }
    fetchData();
  }, [id])

  return (
    <div className="detail">
      <Card style={{ width: '18rem' }}>
        <Form onSubmit={saveData}>
          <Card.Img variant="top" src={book.image} style={{ height: '20rem' }} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Form.Group>
              <Form.Control className="mb-3" as="textarea" type="text" placeholder="Add a description here" name="description" value={book.description} onChange={handleInputChange} />
              <Form.Control className="mb-3" type="text" placeholder="ISBN:" name="isbn" value={book.isbn} onChange={handleInputChange} />
              <Form.Control className="mb-3" type="text" placeholder="https://www.example.com" name="website" value={book.website} onChange={handleInputChange} />
            </Form.Group>
          </Card.Body>
          <Button className="mb-3" type="submit" variant="secondary">save</Button>
        </Form>
      </Card>
    </div>
  )
}