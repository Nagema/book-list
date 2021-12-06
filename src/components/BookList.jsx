import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function BookList(props) {

  return (
    <div>
      <ListGroup>
        {
          props.bookList.map(item => (
            <ListGroup.Item key={item.id}>
              <Link to={`/bookDetail/${item.id}`} style={{ textDecoration: 'none' }}>
                {item.title} - {item.author}
              </Link>
            </ListGroup.Item>
          ))
        }
      </ListGroup>
    </div>
  )
}
