import React, { Component } from 'react';

import { connect } from 'react-redux';

import SearchForm from './Searchform';
import Movies from './Movies';
//import MoviesContainer from './MoviesContainer';
import Spinner from '../Layout/Spinner';

export class Landing extends Component {
	
  render() {
    //const { loading } = this.props;
    return (
      <div className="container">
        <SearchForm />
			{this.props.loading? <Spinner/>:<Movies/>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading,
  movies: state.movies.movies
});

export default connect(mapStateToProps)(Landing);