import React from 'react';
import './index.scss';
import MovieList from '../movieList/index';


/**
 * @description 3列 
 * @author Bin
 * @date 2018-10-12
 * @class MovieItem
 * @extends {React.Component}
 */
class MovieGrid extends React.Component {
    render() {
		return (
			<div className="movieitem">
                <MovieList />
                <MovieList />
                <MovieList /> 
			</div> 
		)
	}
} 


export default MovieGrid;