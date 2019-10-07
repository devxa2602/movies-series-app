import React,{Component} from 'react';
import {Link } from 'react-router-dom'
class Movie extends Component{
	
	render(){
		const movie=this.props.Movie
	
		 return (
			<div className="col-md-3 mb-5">
				<div  className="card card-body bg-dark text-center h-100" >
				 <img  className="w-1000 mb-2" src={movie.Poster} alt={movie.Title}></img>
				 <h5 className="text-light card-title">	{movie.Title.length<20?                                              		`${movie.Title}`:`${movie.Title.substring(0,25)}...`}	</h5>
				   <p className="text-light">Year:<span>{movie.Year}</span></p>
				<Link className="btn btn-primary" to={`/movie/${movie.imdbID}`}>Movie Details</Link> 
				</div>
			</div>
		  )}	
}
export default Movie;

