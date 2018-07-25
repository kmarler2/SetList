import React, {Component} from 'react';
import './searchForm.css';
import { getSetInfo } from './../../Utilities/ApiCalls/apiCalls.js';
import { CleanSet } from './../../Utilities/SetCleaner/setCleaner.js';
import { getSet, displayError, updateSetlists } from './../../Actions/actions.js';
import { connect } from "react-redux";

export class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })  
  }

  handleSubmit = async event => {
    event.preventDefault();
    try { 
      const response = await getSetInfo(this.state.search);
      this.props.handleData(response)
    } catch(error) {
      alert(error.message)
    }
  }

  render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <input
        type='text'
        name='search'
        value={this.state.search}
        placeholder='Search for an artist'
        onChange={this.handleChange}
      />
      <button>Go!</button>
    </form>
    )
  }
}

export const mapStateToProps = state => ({
  query: state.search,
  setlist: state.setlist
});

export const mapDispatchToProps = dispatch => ({
  handleData: setlists => dispatch(updateSetlists(setlists)),
  handleError: error => dispatch(displayError(error))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps)
(SearchForm);