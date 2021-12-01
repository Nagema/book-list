
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { BookList } from './components/BookList';
import { BookDetail } from './components/BookDetail';
import React from 'react';
import './App.css';

function App() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/bookList/:id" element={ <BookDetail /> }>
            </Route>
            <Route path="/" element={ <BookList /> }>
            </Route>
          </Routes>
        </div>
      </Router>
    );
  }
export default App;
