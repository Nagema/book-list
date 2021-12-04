
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { BookDetail } from './components/BookDetail';
import { BookPage } from './components/BookPage';
import './App.css';

function App() {
    return (
      <Router>
        <div className="container">
          <Routes>
            <Route path="/bookList/:id" element={ <BookDetail /> }>
            </Route>
            <Route path="/" 
              element={ <BookPage /> }>
            </Route>
          </Routes>
        </div>
      </Router>
    );
  }
export default App;
