import React, { useState } from 'react';
import { Form, Row, Button } from 'react-bootstrap';

export function CreateForm(props) {

  const [bookdata, setBookData] = useState({
    book: '',
    author: ''
})

  const handleInputChange = (event) => {
    setBookData({
        ...bookdata,
        [event.target.name] : event.target.value
    })
  }
  const sendData = (event) => {
    event.preventDefault()
    const data = { 
        title: bookdata.book, 
        id: bookdata.id,
        author: bookdata.author 
      };
      props.createBook(data);
}

      return (
        <div className="form">
            <Form className="col" onSubmit={sendData}>
              <Row className="mb-3">
                  <Form.Group>
                    <Form.Control className="mb-3" type="text" placeholder="New Book" name="book" onChange={handleInputChange} />
                    <Form.Control className="mb-3" type="text" placeholder="New Author" name="author" onChange={handleInputChange} />
                  </Form.Group>
              </Row> 
              <Button variant="primary" type="submit">
                Add Book
              </Button>
            </Form> 
          </div>
      )
}
