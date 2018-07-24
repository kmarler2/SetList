import React, { Component } from 'react';
import './app.css';
import SearchForm from './../SearchForm/searchForm.js';
import Header from './../../Components/Header/header.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchForm />
      </div>
    );
  }
}

export default App;
