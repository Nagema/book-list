
import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { BookList } from './components/BookList';
import { BookDetail } from './components/BookDetail';
import { CreateForm } from './components/CreateForm';
import './App.css';

function App() {
    return (
      <Router>
        <div className="container">
          <Routes>
            <Route path="/bookList/:id" element={ <BookDetail /> }>
            </Route>
            <Route path="/" 
              element={ 
                <Fragment>
                  <CreateForm />
                  <BookList /> 
                </Fragment>
              }>
            </Route>
          </Routes>
        </div>
      </Router>
    );
  }
export default App;
