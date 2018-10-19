import React from 'react';
import './index.scss';
import MovieItem from '../movieItem/index';


/**
 * @description 单列电影 目前规定的一行最多出现5个电影
 * @author Bin
 * @date 2018-10-12 
 * @class MovieItem
 * @extends {React.Component}
 */
class MovieList extends React.Component { 
    render() {
		return ( 
			<div className="">
                <MovieItem />
                <MovieItem />
                <MovieItem /> 
                <MovieItem /> 
                <MovieItem /> 
			</div> 
		)
	}
} 


export default MovieList;