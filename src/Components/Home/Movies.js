import React, { Component } from 'react';

import { connect } from 'react-redux';

import Movie from './Movie';
//import MoviesContainer from './MoviesContainer';
//import Spinner from '../layout/Spinner';

export class Movies extends Component {
	
  render() {
   let show=null
	if(this.props.movies){
		console.log(this.props.movies)
		show=(<div className="row">
		{this.props.movies.map((movie)=><Movie key={movie.imdbID} Movie={movie}/>)}
		</div>	)
	}
	return(
	<div className="row">
		{show}
	</div>
	)
}
}

const mapStateToProps = state => ({
  movies: state.movies.movies
});

export default connect(mapStateToProps)(Movies);