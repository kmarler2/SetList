import React, {Component} from 'react';
import './searchForm.css';
import { getSetInfo } from './../../Utilities/ApiCalls/apiCalls.js';
import { CleanSet } from './../../Utilities/SetCleaner/setCleaner.js';
import { getSet, displayError } from './../../Actions/actions.js';

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
      console.log(response)
      this.setState({
        setlist: response
      })
    } catch(error) {
      throw new Error(error.message)
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

export const mapStateToProps = (state) => ({
  query: state.search
});

export const mapDispatchToProps = (dispatch) => ({
  handleError: (error) => dispatch(displayError(error))
});

export default SearchForm;