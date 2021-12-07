import React, { useEffect, useState } from 'react';
import { BookList } from './BookList';
import { CreateForm } from './CreateForm';

export function BookPage() {

  const [bookList, setBooks] = useState([])

  const fetchData = async () => {
    const data = await fetch(`${process.env.REACT_APP_API}/api/books`);
    const books = await data.json()
    setBooks(books)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const createBook = (data) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
    fetch(`${process.env.REACT_APP_API}/api/books`, requestOptions)
      .then(response => response.json())
      .then(() => {
        fetchData()
      });
  }

  return (
    <div>
      <CreateForm createBook={createBook} />
      <BookList bookList={bookList} />
    </div>
  )
}