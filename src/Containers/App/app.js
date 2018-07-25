import React, { Component } from 'react';
import './app.css';
import SearchForm from './../SearchForm/searchForm.js';
import Header from './../../Components/Header/header.js';
import { Card } from './../../Containers/Card/card.js';
import CardContainer from '../../Components/CardContainer/cardContainer.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchForm />
        <CardContainer />
      </div>
    );
  }
}

export default App;
