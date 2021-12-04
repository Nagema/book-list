import React, { useEffect, useState } from 'react';
import { BookList } from './BookList';
import { CreateForm } from './CreateForm';

export function BookPage() {

    const [bookList, setBooks] = useState([])

    const fetchData = async () => {
        const data = await fetch('http://localhost:3001/books');
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
          fetch("http://localhost:3001/books", requestOptions)
            .then(response => response.json())
            .then(res => {
                fetchData()
            });
    }
    
      return (
          <div>
            <CreateForm createBook={createBook} />
            <BookList bookList={bookList}/> 
          </div>
      )
}