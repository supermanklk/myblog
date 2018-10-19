import React from 'react';
import './index.scss';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import MovieList from './movieList/index';
class Movies extends React.Component {
  
	render() {
		return (
			<div className="movie">
            这是电影页
			<MovieList/> 
			</div>
		)
	}
} 

// const mapStateToProps = (state) => ({
// 	state: state.SmallToolsReducer
// })
// const mapDispatchToProps = (dispatch) => {
// 	return bindActionCreators({},dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Learn);

export default Movies;