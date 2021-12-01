import React from 'react';
import { Form, Row, Button } from 'react-bootstrap';

export function CreateForm() {

      return (
        <div className="form">
            <Form className="col">
              <Row className="mb-3">
                  <Form.Group>
                    <Form.Control className="mb-3" type="text" placeholder="New Book" />
                    <Form.Control className="mb-3" type="text" placeholder="New Author" />
                  </Form.Group>
              </Row> 
              <Button variant="primary" type="submit">
                Add Book
              </Button>
            </Form> 
          </div>
      )
}
